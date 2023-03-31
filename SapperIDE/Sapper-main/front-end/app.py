# import express  # 导入 Express 模块
from flask import Flask, request, jsonify
from dotenv import load_dotenv  # 导入 dotenv 模块，用于读取环境变量
import os
import os.path
# from openai import Configuration, OpenAIApi  # 导入 OpenAI SDK 模块
import json
from test import Answer

load_dotenv()  # 读取环境变量

app = Flask(__name__, static_url_path='', static_folder='public')  # 创建 Flask 实例

@app.route('/', methods=['GET'])  # 定义 GET 请求路由，用于返回网站首页
def index():
    return app.send_static_file('index.html')  # 发送 index.html 文件

@app.route('/sendMsg', methods=['POST'])  # 定义 POST 请求路由，用于接收客户端发送的消息并返回 OpenAI 的回复
def send_message():
    data = request.form.to_dict()  # 从请求体中获取客户端发送的消息
    print('Message sending:', data['inputMsg'], data['key'])  # 打印客户端发送的消息
    if data['inputMsg'] not in ['1', '2', '3', '4', '5', '6', '7']:
        try:
            openai_response = Answer(data)  # 调用 openai_connection 函数发送消息给 OpenAI，并返回回复
        except Exception as e:
            print(e)
            response = {'code': 0, 'answer': '  请输入正确有效的key！'}
            return jsonify(response)
        print(openai_response['Answer'])  # 打印 OpenAI 返回的数据

        if openai_response['Answer'] == 'Nocode':
            content = '  请先输入一段代码！'
        elif openai_response['Answer'] == 'Menu':
            content = '  1.添加注释；\n2.分析功能；\n3.讲解思路；\n4.关联知识点；\n5.代码优化\n6.用其它方法实现该代码;\n7.代码查错\n（输入数字进行查询，0退出）\n(新输入代码覆盖上一段代码）'
        elif openai_response['Answer'] == 'Overflow':
            content = '  没有这个选项！'
        elif openai_response['Answer'] == 'Exit':
            content = '  再见！您可以输入一段代码唤醒我。'
        else:
            # answer = openai_response['Answer'].strip().replace('/ ^\n + /', '')
            content = '  请稍后，正在为您生成结果...'
        response = {'code': 1, 'answer': content}# 将回复发送给客户端
    else:
        content = '  请稍后，正在为您生成结果...'
        response = {'code': 1, 'answer': content}

    return jsonify(response)



@app.route('/codeResult', methods=['POST'])  # 定义 POST 请求路由，用于返回代码执行结果
def code_result():
    data = request.form.to_dict()  # 从请求体中获取客户端发送的消息
    print('Message sending:', data['inputMsg'])  # 打印客户端发送的消息
    openai_response = Answer(data)  # 调用 openai_connection 函数发送消息给 OpenAI，并返回回复
    print(openai_response['Answer'])  # 打印 OpenAI 返回的数据

    answer = openai_response['Answer'].strip().replace('/ ^\n + /', '')
    content = answer
    response = {'code': content}
    return jsonify(response)
    # result_path = os.path.join(os.path.dirname(__file__), 'public/doc', 'result.txt')  # 拼接代码执行结果文件的路径
    # with open(result_path, 'r', encoding='gb18030' ,errors='ignore') as f:  # 读取代码执行结果文件
    #     result = f.read()
    #     print('Load result from', result_path)  # 打印从哪个文件中读取了结果
    #     response = {'code': result}
    #     return jsonify(response)

# def openai_connection(prompt):  # 定义 openai_connection 函数，用于发送消息给 OpenAI 并返回回复
#     configuration = Configuration(
#         api_key=os.getenv('Openai_APIKey'),  # 设置 OpenAI API 密钥
#         organization='org-L4Y94uCZ2IKjOipmkW2HEAsj'
#     )
#     openai = OpenAIApi(configuration)  # 创建 OpenAI 实例
#     response = openai.Completion.create(
#         engine='text-davinci-003',
#         prompt=prompt,
#         max_tokens=2000,
#         n=1,
#         stop=None,
#         temperature=0.7,
#     )
#     return response.to_dict()  # 返回 OpenAI 的回复

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # 启动 Flask 应用，监听 3333 端口
