import json
import os
import openai
from flask import jsonify

# openai.api_key = "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"


# 利用openai.Completion.create()函数回答问题，实现需求
def openai_completion(prompt):
    """
    OpenAI text completion API given prompt return text
    """
    response = openai.Completion.create(
        model="text-davinci-003",
        # model="code-davinci-002",
        max_tokens=512,
        prompt=prompt,
        temperature=0.8,
    )
    return response['choices'][0]['text']


prompt_Comments = '''Add Chinese comments explaining each line's function in the given code end.For example:
double fact(int n) #定义函数fact  
{
	int i; #定义变量i用于循环 
	double result = 1; #定义变量result用于存储结果
	for (i = 1; i <= n; i++) #循环n次
		result *= i; #将结果乘以i，存入result中
	return result; #返回结果
}'''

prompt_Function = 'Explain the function of the given code in Chinese.'

prompt_Idea = '''Explain the code's work-flow in simple Chinese.For example:
1.首先，将输入的整数转换为字符串。
2.然后，计算字符串的长度，以确定该整数的位数。
3.对于整数的每一个数位，将它的 n 次幂加入总和中。
4.最后，如果总和等于原始整数，则该整数是水仙花数。'''

prompt_Knowledge = '''Summarize code's knowledge points/syntax and explain them in Chinese.For example:
函数 main()： C 语言中的程序入口函数，程序从这里开始执行。
变量：m, n, i, j, k, count 都是变量。其中，m 和 n 是输入的区间范围，i 是循环变量。
标准输入输出：使用 printf() 和 scanf() 函数分别输出和输入数据。其中，printf() 用于输出提示信息，scanf() 用于读取用户输入。'''

prompt_Simply = 'Simplify the code and explain optimization points in Chinese.'


prompt_Rewrite = 'Rewrite the given code using one to three methods.'


def code_analysis(code, choice):
    if choice == '1':
        # print(openai_completion(code + prompt_Comments))
        return openai_completion(code + '\n\n' + prompt_Comments)
    elif choice == '2':
        # print(openai_completion(code + prompt_Function))
        return openai_completion(code + '\n\n' + prompt_Function)
    elif choice == '3':
        # print(openai_completion(code + prompt_Idea))
        return openai_completion(code + '\n\n' + prompt_Idea)
    elif choice == '4':
        # print(openai_completion(code + prompt_Knowledge))
        return openai_completion(code + '\n\n' + prompt_Knowledge)
    elif choice == '5':
        # print(openai_completion(code + prompt_Simply))
        return openai_completion(code + '\n\n' + prompt_Simply)
    elif choice == '6':
        # print(openai_completion(code + prompt_Rewrite))
        return openai_completion(code + '\n\n' + prompt_Rewrite)


file_path = os.path.join(os.path.dirname(__file__), 'storage.json')


# 打开storage.json文件
def read_json():
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data


def write_json(data):
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)


def Answer(query):
    '''
    query 是用户输入的字符串
    步骤一：保证storage.json文件中的有代码

    第一次只能是输入代码：
    如果是代码：
        ①存入storage.json，可以进行后续选择
    如果不是代码 ：
        判断storage.json中是否有代码
        ①如果有代码：
            query存入storage.json ”choice“中,进行选择
        ①如果没用代码：
            返回提示给前端：请先输入代码
    '''
    data = [{
        "id": "",
        "code": "",
        "choice": ""
    }]
    '''
    获取用户id，进入用户对应id的code中
    如果query的id存在zai storage.json.json中进行查询判断
    '''
    openai.api_key = query['key']
    data = read_json()
    has_id = False
    for record in data:
        if record['id'] == query['id']:
            has_id = True
            break
    if not has_id:
        new_record = {"id": query['id'], "code": '', "choice": ''}
        data.append(new_record)
        write_json(data)
    if len(query['inputMsg']) > 5:
        for record in data:
            if record['id'] == query['id']:
                record['code'] = query['inputMsg']
                write_json(data)
                # print("代码存入成功")
                break
        # print('五个任务：\n1\n2\n3\n4\n5\n0代表退出')
        return {'Answer': 'Menu'}  # 告诉前端,可以输出Menu给用户选择
    else:  # query是选项
        # 该用户没输入代码
        # 先把数据读出到data，再赋值
        data = read_json()
        for record in data:
            if record['id'] == query['id'] and record['code'] == '':
                # print("请先输入代码")
                return {'Answer': 'Nocode'} # 告诉前端,让对应用户先输入代码Nocode
        else:
            if query['inputMsg'] == '0':
                # 删除该用户在storage.json中的数据
                for record in data:
                    if record['id'] == query['id']:
                        data.remove(record)
                        write_json(data)
                        # print("退出成功")
                        return {'Answer': 'Exit'}  # 告诉前端,让对应用户退出
            elif query['inputMsg'] in ['1', '2', '3', '4', '5','6']:
                # 把该用的选项存入storage.json
                for record in data:
                    if record['id'] == query['id']:
                        record['choice'] = query['inputMsg']
                        analysis = code_analysis(record['code'], record['choice'])
                        write_json(data)
                        # print("你选择了第{}个任务".format(query['inputMsg']))
                        return {'Answer': analysis}  # 告诉前端,让对应用户选择
            else:
                # print('选项错误')
                return {'Answer': 'Overflow'} # 告诉前端,用户选择溢出

# query = {
#     'id': '',
#     'inputMsg': ''
# }
# while (query['inputMsg'] != 0):  # 结束用户输入0 =》 服务器清楚storage.json文件数据 返回提示信息：再见！
#     query['id'] = str(input('id：'))
#     query['inputMsg'] = str(input('inputMsg：'))
#     Answer(query)