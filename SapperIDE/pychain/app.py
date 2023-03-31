from flask import Flask, request, render_template
from flask_cors import CORS
import json
from GenCode import *
# import gevent.pywsgi
# import gevent.monkey
# from flask_sslify import SSLify

app = Flask(__name__)
CORS(app)
# sslify = SSLify(app)
# CORS(app, supports_credentials=True)
@app.route('/',methods = ['POST','GET'])
def initapp():
    return "Hello World"

@app.route('/PromptSapper',methods = ['POST','GET'])
def PromptSapper():
    if request.method == 'POST':
        query = request.form
        print(query)
        answer = sapper(query)
        print(json.dumps(answer))
        # answer是json文件
        return json.dumps(answer)

if __name__ == '__main__':
    # app.run(processes=True,debug=False,port=5000,ssl_context=('fullchain.pem', 'privkey.key'),host='0.0.0.0')
    # gevent_server = gevent.pywsgi.WSGIServer(('0.0.0.0', 5000),app)
    # gevent_server.serve_forever()
    app.run(debug=False, port=5001)
