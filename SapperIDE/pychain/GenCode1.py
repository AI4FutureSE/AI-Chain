from sapperchain import sapperchain
import os
import json
from flask import jsonify

file_path = os.path.join(os.path.dirname(__file__), 'storage.json')


def read_json():
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def write_json(data):
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)


def update_request(initrecord, query):
    initrecord["id"] = query['id']
    initrecord["runflag"] = True
    data = read_json()
    has_id = False
    for record in data:
        if record['id'] == query['id']:
            has_id = True
            return record
    if not has_id:
        new_record = initrecord
        data.append(new_record)
        write_json(data)
        return new_record


def get_value(vary, request, query):
    if vary == query["input"]:
        query["runflag"] = True
        query["input"] = ""
        query[vary] = request["query"]
        return False, query, request["query"]
    else:
        return True, query, query[vary]


def resetquery(query,initrecord):
    initrecord["id"] = query['id']
    initrecord["runflag"] = True
    query = initrecord
    data = read_json()
    for i in range(len(data)):
        record = data[i]
        if record['id'] == query['id']:
            data[i] = query
    write_json(data)


def savequery(query):
    data = read_json()
    for i in range(len(data)):
        record = data[i]
        if record['id'] == query['id']:
            data[i] = query
    write_json(data)


os.environ["OPENAI_API_KEY"] = "your openai key"
f1 = open("PromptTemplate.json", "r")
prompt_template = json.loads(f1.read())


def sapper(request):
    chain = sapperchain()
    chain.promptbase(prompt_template)
    initrecord = {"id":"","input":"human","output":[],"runflag":"","human":"","history":"","chatbot":""}
    query = update_request(initrecord, request)
    human = query["human"]
    history = query["history"]
    chatbot = query["chatbot"]
    query["output"] = []

    while human != "Good Bye":
        stop, query, human = get_value("human", request, query)
        if stop and query["runflag"]:
            query["runflag"] = False
            query["input"] = "human"
            savequery(query)
            return {'Answer': query["output"]}

        if query["runflag"]:
            # chatbot = chain.worker({"query": ["context"]}, [history, human], {"engine": " text-davinci-003"})
            chatbot = history
            query["chatbot"] = history

        if query["runflag"]:
            query["output"].append(chatbot)

        if query["runflag"]:
            # history = chain.worker({"combine": ["context"]}, [history, human, chatbot], {"engine": " PythonREPL"})
            history = history + "\n" + human + "\n" + chatbot
            query["history"] = history

    resetquery(query, initrecord)
