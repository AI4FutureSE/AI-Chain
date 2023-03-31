import json
promptlist = ["Know_mining_usage","Know_mining_behavior", "Know_mining_efficiency","Know_mining_logic","Know_mining_replace",
              "Mul_difference","Mul_efficiency","Mul_logic","Mul_replace",
              "TF_difference","TF_efficiency","TF_logic","TF_replace",
              "Yes_difference","Yes_efficiency","Yes_logic","Yes_replace",]
promptjson = {}
for promptfile in promptlist:
    prompt = open("Prompt/"+promptfile).read().split("\n\n")
    prompttemp = {}
    for i in range(len(prompt)-1):
        name = "Example" + str(i+1)
        prompt[i] = prompt[i] + "\n"
        prompttemp[name]= prompt[i]
    prompttemp["Template"] = prompt[-1]
    promptjson[promptfile] = prompttemp

with open('title.json','w',encoding='utf8') as f2:
    # ensure_ascii=False才能输入中文，否则是Unicode字符
    # indent=2 JSON数据的缩进，美观
    json.dump(promptjson,f2,ensure_ascii=False,indent=2)



