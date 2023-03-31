import openai
import LLMConfigurator
import re
import json
import os
class sapperchain:
    def __init__(self):
        pass
    def promptbase(self,prompt_template):
        self.prompt_template = json.loads(prompt_template)
    def worker(self, prompt, preunits, model):
        # return preunits[0]
        if(model["engine"].replace(" ","") == "PythonREPL"):
            return self.run_PythonREPL(prompt, preunits, model)
        elif(model["engine"].replace(" ","") == "SerpAPIWrapper"):
            return self.run_SerpAPIWrapper(prompt, preunits, model)
        else:
            return self.run_Function(prompt, preunits, model)
    def getPromptParams(self,prompt_template):
        if re.search(r"{{\w+}}", prompt_template):
            paraNames = re.findall(r"{{.*}}", prompt_template)
            for i in range(len(paraNames)):
                paraNames[i] = paraNames[i][2:-2]
        return paraNames
    def run_Function(self, promptvalue, prenunits ,model):
        ready_prompt = ""
        for key, value in promptvalue.items():
            for i in value:
                ready_prompt += self.prompt_template[key][i] + "\n"
        openai.api_key = "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"
        para_name = self.getPromptParams(ready_prompt)
        for index, key in enumerate(para_name):
            ready_prompt = ready_prompt.replace("{{%s}}" % key, prenunits[index])
        Config = LLMConfigurator.Config()
        Config.add_to_config("prompt", ready_prompt)
        if (model["engine"].replace(" ", "") == "DALL-E"):
            print("DALL-E")
            response = openai.Image.create(
                prompt=ready_prompt,
                n=1,
                size="512x512",
            )
            image_url = response['data'][0]['url']
            print(image_url)
            return image_url
        if (model["engine"].replace(" ", "") == "gpt-3.5-turbo"):
            # Note: you need to be using OpenAI Python v0.27.0 for the code below to work
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "user", "content": ready_prompt}
                ]
            )
            output = response.choices[0].message["content"]
            return output
        for key in model:
            Config.add_to_config(key, model[key])
        response = openai.Completion.create(
            engine=Config.engine.replace(" ", ""),
            prompt=Config.prompt,
            temperature=float(Config.temperature),
            max_tokens=int(Config.max_tokens),
            top_p=float(Config.top_p),
            frequency_penalty=float(Config.frequency_penalty),
            presence_penalty=float(Config.presence_penalty),
            stop=Config.stop_strs
        )
        output = response["choices"][0]["text"]
        # 只选取第一个生成的内容
        output = output.split("===================")[0]
        # 删除空值之后的内容
        output = output.split("\n")
        # delete the empty string in the list
        output = [i for i in output if i != '']
        output = "\n".join(output)
        return output
    def run_PythonREPL(self,promptvalue, prenunits, model):
        ready_prompt = ""

        for key, value in promptvalue.items():
            for i in value:
                ready_prompt += self.prompt_template[key][i] + "\n"
        # ready_prompt = promptvalue
        para_name = self.getPromptParams(ready_prompt)
        for index, key in enumerate(para_name):
            ready_prompt = ready_prompt.replace("{{%s}}" % key, prenunits[index])
        os.environ["SERPAPI_API_KEY"] = "39a55d7595bb30d419f79bf67cc13f507c191e633ad367eb42d6776f6db11d51"
        from langchain.utilities import PythonREPL
        python_repl = PythonREPL()
        result = python_repl.run(ready_prompt)
        return result

    def run_SerpAPIWrapper(self,promptvalue, prenunits, model):
        ready_prompt = promptvalue
        para_name = self.getPromptParams(promptvalue)
        for index, key in enumerate(para_name):
            ready_prompt = ready_prompt.replace("{{%s}}" % key, prenunits[index])
        os.environ["SERPAPI_API_KEY"] = "39a55d7595bb30d419f79bf67cc13f507c191e633ad367eb42d6776f6db11d51"
        from langchain.utilities import SerpAPIWrapper
        search = SerpAPIWrapper()
        return search.run(ready_prompt)
