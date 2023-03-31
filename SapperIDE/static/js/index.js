var ProjectList = [];
// Variable of created block
var Variable_xmlList = [];
// project prompt
var PromptList = [];
// prompt base
var PrompttemplateList = [];
// engine of AI model
var EngineConfigs = {
    'initmodel':{
    'Temperature': [0.7, 0.01, 1],
    'Maximum length': [225, 1,4000],
    'Stop sequences': [''],
    'Top P': [1, 0.01, 1],
    'Frequency penalty': [0 ,0.01,2],
    'Presence penalty': [0,0.01,2],
    'Best of': [1,1,20],
    },
}
var RunEngineConfigs = {}
var ModelConfigs = {
    'text-davinci-003':{
    'temperature': [0.7, 0.01, 1,'Temperature'],
    'max_tokens': [225, 1,4000,'Maximum length'],
    'stop_strs': ['','Stop sequences'],
    'top_p': [1, 0.01, 1,'Top P'],
    'frequency_penalty': [0 ,0.01,2,'Frequency penalty'],
    'presence_penalty': [0,0.01,2,'Presence penalty'],
    // 'Best of': [1,1,20],
    },
    'gpt-3.5-turbo':{
    'temperature': [0.7, 0.01, 1,'Temperature'],
    'max_tokens': [225, 1,2048,'Maximum length'],
    'top_p': [1, 0.01, 1,'Top P'],
    'frequency_penalty': [0 ,0.01,2,'Frequency penalty'],
    'presence_penalty': [0,0.01,2,'Presence penalty'],
    },
};
var RunModelConfigs = {};
var ReadymodelList = [];
// project model
var ModelList = [];
// model base
var DIYmodelList = [];

var ProjectCreatePrompt = ["init_prompt_value"];
var ProjectCreateExample = [];
// ID of the prompt context block created
var CreateExample = [];
var BlockDebugIDs = ["input_value"]
var DebugFlag = false
var RerunFlag = false
// var controller;
var InputFlag = false
// ID of the prompt block created
var CreatePrompt= ["init_prompt_template"];
// prompt's values of prompt base
var PromptValues = {};
var RunPromptValues = {};
var PythonPromptValues = {}
// model's values of model base
var ModelValues = {};
// upload and save projects
var ProjectValues = {}
var OpenAIKey = "";
var initvariables = []
// 云端部署时记录第一个接收input数据的变量
var recordinput = ""
// worker的编号
var workerindex = 0

// design view 的聊天记录
var ClarifyConversion = [];
// exploration view  的聊天记录
var ExploreConversion = [];
// 该project的产品经理
var DesignManager = '';
let WindowHeight = window.innerHeight;
var PromptTemplateShownId = "";
// create main workspace of blockly
var ChatBot = {"Code_xmlList":[],"Variable_xmlList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var\"><field name=\"unit_value\">human</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var_value\"><field name=\"unit_value\">human</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var\"><field name=\"unit_value\">history</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var_value\"><field name=\"unit_value\">history</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var\"><field name=\"unit_value\">chatbot</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var_value\"><field name=\"unit_value\">chatbot</field></block>"],"PromptList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" collapsed=\"true\"><field name=\"Prompt_Name\">HelloWorld</field><statement name=\"prompt_value\"><block type=\"Example\"><field name=\"Example_value\">Hello</field><next><block type=\"Example\"><field name=\"Example_value\">World</field></block></next></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" collapsed=\"true\"><field name=\"Prompt_Name\">query</field><statement name=\"prompt_value\"><block type=\"Example\"><field name=\"Example_value\">context</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" collapsed=\"true\"><field name=\"Prompt_Name\">combine</field><statement name=\"prompt_value\"><block type=\"Example\"><field name=\"Example_value\">context</field></block></statement></block>"],"PrompttemplateList":[],"ReadymodelList":[],"ModelList":[],"DIYmodelList":[],"PromptValues":{"HelloWorld":{"Hello":"Hello","World":"World\n{{code}}"},"query":{"context":"You are a chatbot having a conversation with a human.\n\n{{chat_history}}\nHuman: {{human_input}}\nChatbot:"},"combine":{"context":"chat = \"\"\"{{chat}}\"\"\"\nhuman = \"\"\"Human: {{human}}\"\"\"\nbot = \"\"\"Chatbot: {{bot}}\"\"\"\nhistory = chat + \"\\n\" + human + \"\\n\" + bot + \"\\n\"\nprint(history)\n"}},"ModelValues":{"LLM1":{"engine":" text-davinci-003"},"python":{"engine":" PythonREPL"}}, "RunPromptValues":{"7}dPD6bBCe{~}=-5qdRo":{"tgAw:/}+aA}yNs_a2$j=":"You are a chatbot having a conversation with a human.\n\n{{chat_history}}\nHuman: {{human_input}}\nChatbot:"}, "MZV/{h9pU+i%2^8#y4pn":{"X(49laNy6|w_5lx?q)/Y":"chat = \"\"\"{{chat}}\"\"\"\nhuman = \"\"\"Human: {{human}}\"\"\"\nbot = \"\"\"Chatbot: {{bot}}\"\"\"\nhistory = chat + \"\\n\" + human + \"\\n\" + bot + \"\\n\"\nprint(history)\n"}},"workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\">\n  <block type=\"Module\" id=\"LO1d1^HPEn9OPM~Pc*[`\" x=\"130\" y=\"70\">\n    <field name=\"Module\">Container</field>\n    <field name=\"Module_Name\">Container_Name</field>\n    <field name=\"Contain\">Units</field>\n    <statement name=\"Contain\">\n      <block type=\"prompt_controls_whileUntil\" id=\"K[d%?-1-bpnW00b/hRi*\">\n        <field name=\"MODE\">WHILE</field>\n        <value name=\"BOOL\">\n          <block type=\"prompt_compare\" id=\"Dpe5alRu3cLuYAA`j8sc\">\n            <field name=\"OP\">NEQ</field>\n            <value name=\"A\">\n              <block type=\"unit_var_value\" id=\"%s3kpTcaI!?Y37%LL@Nf\">\n                <field name=\"unit_value\">human</field>\n              </block>\n            </value>\n            <value name=\"B\">\n              <shadow type=\"text\" id=\"]kxx|~1G=mv#ikwy==]d\">\n                <field name=\"TEXT\">Good Bye</field>\n              </shadow>\n            </value>\n          </block>\n        </value>\n        <statement name=\"DO\">\n          <block type=\"AI_Unit\" id=\"c4(TuX3jWV/g6uE.7}?k\">\n            <field name=\"AI_Unit\">Worker</field>\n            <field name=\"Unit_Name\">history</field>\n            <statement name=\"PreWorkers\">\n              <block type=\"unit_var\" id=\"hqrRA-vb[R[Ck;nNaOcj\">\n                <field name=\"unit_value\">history</field>\n                <next>\n                  <block type=\"unit_var\" id=\"iFcZ2N^%YuZ}LA-W4{`{\">\n                    <field name=\"unit_value\">human</field>\n                    <next>\n                      <block type=\"Output\" id=\"~l.]Y^}1~j!;[]LhT0Zg\">\n                        <statement name=\"Output_var\">\n                          <block type=\"AI_Unit\" id=\"#:zMy?9~,n$]FQ}?/-.F\">\n                            <field name=\"AI_Unit\">Worker</field>\n                            <field name=\"Unit_Name\">chatbot</field>\n                            <statement name=\"PreWorkers\">\n                              <block type=\"unit_var\" id=\"=h4NMhs86hj((PG@o%5#\">\n                                <field name=\"unit_value\">history</field>\n                                <next>\n                                  <block type=\"Input\" id=\"L$a5?`G`2-@azIzh_H3*\">\n                                    <statement name=\"input_var\">\n                                      <block type=\"unit_var\" id=\"B@:lMd{%E|m?5SWT:dy,\">\n                                        <field name=\"unit_value\">human</field>\n                                      </block>\n                                    </statement>\n                                  </block>\n                                </next>\n                              </block>\n                            </statement>\n                            <value name=\"Prompt\">\n                              <block type=\"Prompt_template\" id=\"7}dPD6bBCe{~}=-5qdRo\" collapsed=\"true\">\n                                <field name=\"Prompt_Name\">query</field>\n                                <statement name=\"prompt_value\">\n                                  <block type=\"Example\" id=\"tgAw:/}+aA}yNs_a2$j=\">\n                                    <field name=\"Example_value\">context</field>\n                                  </block>\n                                </statement>\n                              </block>\n                            </value>\n                            <value name=\"Model\">\n                              <block type=\"LLM_Model\" id=\"695k7a0_;UQ07;-Fa8?,\" collapsed=\"true\">\n                                <field name=\"LLM_Name\">LLM1</field>\n                                <statement name=\"Model\">\n                                  <block type=\"Model\" id=\"^Z9mLsZLx5Yd3J}Pk#N_\">\n                                    <field name=\"model_value\">text-davinci-003</field>\n                                  </block>\n                                </statement>\n                              </block>\n                            </value>\n                          </block>\n                        </statement>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </statement>\n            <value name=\"Prompt\">\n              <block type=\"Prompt_template\" id=\"MZV/{h9pU+i%2^8#y4pn\" collapsed=\"true\">\n                <field name=\"Prompt_Name\">combine</field>\n                <statement name=\"prompt_value\">\n                  <block type=\"Example\" id=\"X(49laNy6|w_5lx?q)/Y\">\n                    <field name=\"Example_value\">context</field>\n                  </block>\n                </statement>\n              </block>\n            </value>\n            <value name=\"Model\">\n              <block type=\"LLM_Model\" id=\"LiyOYY9A+wfdQjD~c]Aq\" collapsed=\"true\">\n                <field name=\"LLM_Name\">python</field>\n                <statement name=\"Model\">\n                  <block type=\"Tool_Model\" id=\"c7H$_dW5eBymxy#FPW)0\">\n                    <field name=\"model_value\">PythonREPL</field>\n                  </block>\n                </statement>\n              </block>\n            </value>\n          </block>\n        </statement>\n      </block>\n    </statement>\n  </block>\n</xml>"}
var todos2pic = {"Code_xmlList":[],"Variable_xmlList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var\"><field name=\"unit_value\">Input</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var_value\"><field name=\"unit_value\">Input</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var\"><field name=\"unit_value\">TodoList</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"unit_var_value\"><field name=\"unit_value\">TodoList</field></block>"],"PromptList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"RPe=nuzPNW~fZ`YEp=5u\" collapsed=\"true\" x=\"50\" y=\"30\"><field name=\"Prompt_Name\">HelloWorld</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"@#c1XVr}TrID8h:[t(#8\"><field name=\"Example_value\">Hello</field><next><block type=\"Example\" id=\"9^^E+QrNFHd3G34oY?kO\"><field name=\"Example_value\">World</field></block></next></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"|#MQql3(-8-%pt*/5(bN\" collapsed=\"true\" x=\"70\" y=\"130\"><field name=\"Prompt_Name\">Text2Picdes</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"Y9,R_0#ilGIZ%)K^G2SH\"><field name=\"Example_value\">context</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"H8QOQQl,{beXQ?$_63[v\" collapsed=\"true\" x=\"71\" y=\"50\"><field name=\"Prompt_Name\">Des2Pic</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"k|w2.%M^34FK.:z+.8Ny\"><field name=\"Example_value\">context</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"UPCIz?_qGjRb|j@ctn#Q\" collapsed=\"true\" x=\"10\" y=\"110\"><field name=\"Prompt_Name\">List2Text</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"~TnXWYSlMGWtWQfj/u$S\"><field name=\"Example_value\">context</field></block></statement></block>"],"PrompttemplateList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"RPe=nuzPNW~fZ`YEp=5u\" collapsed=\"true\" x=\"50\" y=\"30\"><field name=\"Prompt_Name\">HelloWorld</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"@#c1XVr}TrID8h:[t(#8\"><field name=\"Example_value\">Hello</field><next><block type=\"Example\" id=\"9^^E+QrNFHd3G34oY?kO\"><field name=\"Example_value\">World</field></block></next></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"|#MQql3(-8-%pt*/5(bN\" collapsed=\"true\" x=\"70\" y=\"130\"><field name=\"Prompt_Name\">Text2Picdes</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"Y9,R_0#ilGIZ%)K^G2SH\"><field name=\"Example_value\">context</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"H8QOQQl,{beXQ?$_63[v\" collapsed=\"true\" x=\"71\" y=\"50\"><field name=\"Prompt_Name\">Des2Pic</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"k|w2.%M^34FK.:z+.8Ny\"><field name=\"Example_value\">context</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Prompt_template\" id=\"UPCIz?_qGjRb|j@ctn#Q\" collapsed=\"true\" x=\"10\" y=\"110\"><field name=\"Prompt_Name\">List2Text</field><statement name=\"prompt_value\"><block type=\"Example\" id=\"~TnXWYSlMGWtWQfj/u$S\"><field name=\"Example_value\">context</field></block></statement></block>"],"ReadymodelList":[],"ModelList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"LLM_Model\" id=\"j1PqFvD1|^}~S${9H~]@\" collapsed=\"true\" x=\"47\" y=\"36\"><field name=\"LLM_Name\">HelloWorld</field><statement name=\"Model\"><block type=\"Model\" id=\"jCs]e`8O5fdhJLx~W,-r\"><field name=\"model_value\">text-davinci-003</field></block></statement><statement name=\"configuration\"><block type=\"LLM_temperature\" id=\")ChmJGZYmoW%6B4QZ/58\"><field name=\"config_name\">temperature</field><field name=\"config_value\">0</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"LLM_Model\" id=\"m@C]NqbftMm_SPqsF0aT\" collapsed=\"true\" x=\"54\" y=\"107\"><field name=\"LLM_Name\">Text2Pic</field><statement name=\"Model\"><block type=\"Model\" id=\"=FbGwT8UshcHUU6RvTD6\"><field name=\"model_value\">DALL-E</field></block></statement><statement name=\"configuration\"><block type=\"LLM_temperature\" id=\"8:s,r|C9DU)p8;$CFi)V\"><field name=\"config_name\">temperature</field><field name=\"config_value\">0</field></block></statement></block>"],"DIYmodelList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"LLM_Model\" id=\"j1PqFvD1|^}~S${9H~]@\" collapsed=\"true\" x=\"47\" y=\"36\"><field name=\"LLM_Name\">HelloWorld</field><statement name=\"Model\"><block type=\"Model\" id=\"jCs]e`8O5fdhJLx~W,-r\"><field name=\"model_value\">text-davinci-003</field></block></statement><statement name=\"configuration\"><block type=\"LLM_temperature\" id=\")ChmJGZYmoW%6B4QZ/58\"><field name=\"config_name\">temperature</field><field name=\"config_value\">0</field></block></statement></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"LLM_Model\" id=\"m@C]NqbftMm_SPqsF0aT\" collapsed=\"true\" x=\"54\" y=\"107\"><field name=\"LLM_Name\">Text2Pic</field><statement name=\"Model\"><block type=\"Model\" id=\"=FbGwT8UshcHUU6RvTD6\"><field name=\"model_value\">DALL-E</field></block></statement><statement name=\"configuration\"><block type=\"LLM_temperature\" id=\"8:s,r|C9DU)p8;$CFi)V\"><field name=\"config_name\">temperature</field><field name=\"config_value\">0</field></block></statement></block>"],"PromptValues":{"HelloWorld":{"Hello":"Hello","World":"World\n{{code}}"},"List2Text":{"context":"{{List}}\n\nWrite an inspirational paragraph based on todos above."},"Text2Picdes":{"context":"{{Text}}\n\nConvert the beautiful text above into a description of a painting"},"Des2Pic":{"context":"{{description}}\n\nCreate inspiring pictures based on the description above"}},"ModelValues":{"HelloWorld":{"engine":" text-davinci-003","temperature":"0"},"Text2Pic":{"engine":" DALL-E","temperature":"0"}}, "RunPromptValues":{"Q5k:xxZYe+8*FyR#PA-,":{"D~a,wg|t$1?Ni$]MEiQH":"{{List}}\n\nWrite an inspirational paragraph based on todos above."},"7`z=;`-ffmU$ZfctX:B9":{"qTqsqw:yL`Q(Wj,iQoe,":"{{Text}}\n\nConvert the beautiful text above into a description of a painting"},"u0F#Lzs?1k*|NdL*p=wR":{"Qvxln/dAU2DH-met/zmr":"{{description}}\n\nCreate inspiring pictures based on the description above"}},"workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\">\n  <block type=\"Output\" id=\"(0E8H4V4U*b];s]fB.Sh\" x=\"270\" y=\"70\">\n    <statement name=\"Output_var\">\n      <block type=\"AI_Unit\" id=\"#qy/c21;izMt3UB6Mq8d\">\n        <field name=\"AI_Unit\">AI_Unit</field>\n        <field name=\"Unit_Name\">Des2Picture</field>\n        <statement name=\"PreWorkers\">\n          <block type=\"AI_Unit\" id=\"6{L6?9:(q7UK//7cu+9w\">\n            <field name=\"AI_Unit\">Worker</field>\n            <field name=\"Unit_Name\">description</field>\n            <statement name=\"PreWorkers\">\n              <block type=\"Output\" id=\"snhKFN7*)FbtI4I{Yjfx\">\n                <statement name=\"Output_var\">\n                  <block type=\"AI_Unit\" id=\"/Q.w=okPGy2C;Q,G,BF~\">\n                    <field name=\"AI_Unit\">Worker</field>\n                    <field name=\"Unit_Name\">Text</field>\n                    <statement name=\"PreWorkers\">\n                      <block type=\"Input\" id=\"cP^akF5D2?]L4|@r1L~d\">\n                        <statement name=\"input_var\">\n                          <block type=\"unit_var\" id=\"551Pr*=KrvVZ%hmf$p,#\">\n                            <field name=\"unit_value\">TodoList</field>\n                          </block>\n                        </statement>\n                      </block>\n                    </statement>\n                    <value name=\"Prompt\">\n                      <block type=\"Prompt_template\" id=\"Q5k:xxZYe+8*FyR#PA-,\" collapsed=\"true\">\n                        <field name=\"Prompt_Name\">List2Text</field>\n                        <statement name=\"prompt_value\">\n                          <block type=\"Example\" id=\"D~a,wg|t$1?Ni$]MEiQH\">\n                            <field name=\"Example_value\">context</field>\n                          </block>\n                        </statement>\n                      </block>\n                    </value>\n                    <value name=\"Model\">\n                      <block type=\"LLM_Model\" id=\"NG?rCuayT|=^Kh`(rkka\" collapsed=\"true\">\n                        <field name=\"LLM_Name\">HelloWorld</field>\n                        <statement name=\"Model\">\n                          <block type=\"Model\" id=\"S:]REj%}ULM.M1Iq2;-P\">\n                            <field name=\"model_value\">text-davinci-003</field>\n                          </block>\n                        </statement>\n                        <statement name=\"configuration\">\n                          <block type=\"LLM_temperature\" id=\"@7p84QNCrdPM1Kg][{OS\">\n                            <field name=\"config_name\">temperature</field>\n                            <field name=\"config_value\">0</field>\n                          </block>\n                        </statement>\n                      </block>\n                    </value>\n                  </block>\n                </statement>\n              </block>\n            </statement>\n            <value name=\"Prompt\">\n              <block type=\"Prompt_template\" id=\"7`z=;`-ffmU$ZfctX:B9\" collapsed=\"true\">\n                <field name=\"Prompt_Name\">Text2Picdes</field>\n                <statement name=\"prompt_value\">\n                  <block type=\"Example\" id=\"qTqsqw:yL`Q(Wj,iQoe,\">\n                    <field name=\"Example_value\">context</field>\n                  </block>\n                </statement>\n              </block>\n            </value>\n            <value name=\"Model\">\n              <block type=\"LLM_Model\" id=\"/s/GpmKM(PK95=S:?3uT\" collapsed=\"true\">\n                <field name=\"LLM_Name\">HelloWorld</field>\n                <statement name=\"Model\">\n                  <block type=\"Model\" id=\"/o3oC^#BwXuueqk%t^s[\">\n                    <field name=\"model_value\">text-davinci-003</field>\n                  </block>\n                </statement>\n                <statement name=\"configuration\">\n                  <block type=\"LLM_temperature\" id=\"EG[)]jGeBj]IT$T4r%@]\">\n                    <field name=\"config_name\">temperature</field>\n                    <field name=\"config_value\">0</field>\n                  </block>\n                </statement>\n              </block>\n            </value>\n          </block>\n        </statement>\n        <value name=\"Prompt\">\n          <block type=\"Prompt_template\" id=\"u0F#Lzs?1k*|NdL*p=wR\" collapsed=\"true\">\n            <field name=\"Prompt_Name\">Des2Pic</field>\n            <statement name=\"prompt_value\">\n              <block type=\"Example\" id=\"Qvxln/dAU2DH-met/zmr\">\n                <field name=\"Example_value\">context</field>\n              </block>\n            </statement>\n          </block>\n        </value>\n        <value name=\"Model\">\n          <block type=\"LLM_Model\" id=\"6L?%FLt(pih]jy[dI2#B\" collapsed=\"true\">\n            <field name=\"LLM_Name\">Text2Pic</field>\n            <statement name=\"Model\">\n              <block type=\"Model\" id=\"5vA+5$AbA!CDn}1]2Nr%\">\n                <field name=\"model_value\">DALL-E</field>\n              </block>\n            </statement>\n            <statement name=\"configuration\">\n              <block type=\"LLM_temperature\" id=\"F-3Fx~%.zcG~Lnd_:%dP\">\n                <field name=\"config_name\">temperature</field>\n                <field name=\"config_value\">0</field>\n              </block>\n            </statement>\n          </block>\n        </value>\n      </block>\n    </statement>\n  </block>\n</xml>"}

document.getElementById('sapper_body').style.height = WindowHeight - 55 + 'px';
document.getElementById("WorkDiv").style.height = WindowHeight - 80 + 'px';

document.getElementById("input_value").style.height = document.getElementById("BlockConsole").offsetHeight - 25 + 'px';
// document.getElementById("BlockConsoleInput").style.display = "none";
document.getElementById("BlockConsoleDebug").style.display = "none";

document.getElementById('ShowProjectDiv').addEventListener('click',function(event){
    if(event.target.className != 'btn content_button'){
        return;
    }
    for(var i = 0; i < document.getElementById('ShowProjectDiv').children.length; i++){
        document.getElementById('ShowProjectDiv').children[i].style.backgroundColor = 'gainsboro';
    }
    event.target.style.backgroundColor = '#b4afaf';
    initIDE();
    // update_project(initproject);
    var name_width = getTextWidth(event.target.innerText,13);
    document.getElementById("Save_Project_Name").style.width = name_width + 10 + "px";
    document.getElementById("Save_Project_Name").innerText=event.target.innerText;
    update_project(ProjectValues[event.target.innerText]);
});

function getTextWidth(str,fontSize){
    let result = 10;

    let ele = document.createElement('span')
    //字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
    //str = str.replace(/\\n/g,' ').replace(/\\r/g,' ');
    ele.innerText = str;
    //不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
    ele.style.fontSize = fontSize;

    //由于父节点的样式会影响子节点，这里可按需添加到指定节点上
    document.documentElement.append(ele);

    result =  ele.offsetWidth;

    document.documentElement.removeChild(ele);
    return result;
}

var demoWorkspace = Blockly.inject('blocklyDiv',{
      media: 'static/media/',
      toolbox: document.getElementById('toolbox'),
      collapse : false,
      scrollbars : true,
      grid: {
          spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true},
      zoom: {controls: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2},
      trashcan: true,
});
// create model workspace of blockly
var ModelWorkspace = Blockly.inject('CreateModelDiv',{
    media: 'static/media/',
    toolbox: document.getElementById('modeltoolbox'),
	collapse : true,
	comments : true,
	disable : true,
	maxBlocks : Infinity,
	trashcan : true,
	// horizontalLayout : true,
	toolboxPosition : 'start',
	css : true,
	rtl : false,
	scrollbars : true,
	sounds : true,
	oneBasedIndex : true,
	grid : {
		spacing : 20,
		length : 1,
		colour : '#888',
		snap : false
	},
	zoom : {
		controls : true,
		startScale : 1,
		maxScale : 3,
		minScale : 0.3,
		scaleSpeed : 1.2
	}
});
// create prompt workspace of blockly
var PromptWorkspace = Blockly.inject('CreatePromptDiv',{
      media: 'static/media/',
      toolbox: document.getElementById('prompttoolbox'),
      collapse : false,
      grid: {
          spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true},
      zoom: {controls: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2},
      trashcan: true,
});

// Initial interface state.
var initproject = {
  "Code_xmlList":[],
  "Variable_xmlList":["<button xmlns=\"http://www.w3.org/1999/xhtml\" text=\"Create Variable...\" callbackkey=\"Create_Variable\"></button>"],
  "PromptList":["<button xmlns=\"http://www.w3.org/1999/xhtml\" text=\"Import Prompt...\" callbackkey=\"Create_Prompt\"></button>"],
  "PrompttemplateList":[],
  "ReadymodelList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Model\"><field name=\"model_value\">gpt-3.5-turbo</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Model\"><field name=\"model_value\">code-davinci-002</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Model\"><field name=\"model_value\">text-davinci-003</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Model\"><field name=\"model_value\">DALL-E</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Tool_Model\"><field name=\"model_value\">PythonREPL</field></block>","<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"Tool_Model\"><field name=\"model_value\">SerpAPIWrapper</field></block>"],
  "ModelList":["<button xmlns=\"http://www.w3.org/1999/xhtml\" text=\"Import Model...\" callbackkey=\"Create_Model\"></button>"],
  "DIYmodelList":["<block xmlns=\"https://developers.google.com/blockly/xml\" type=\"LLM_Model\"></block>"],
  "PromptValues":{},
  "ModelValues":{},
    "RunPromptValues":{},
  "workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\"></xml>"
}

// Listen to prompt create event, then create a textarea for user to input prompt value from prompt workspace
PromptWorkspace.addChangeListener(CreatePromptEvent);
demoWorkspace.addChangeListener(ShowPromptEvent);

function handleNewBlocks() {
     // 获取工作区中的所有代码块
    const allBlocks = demoWorkspace.getAllBlocks();
    // 过滤出类型为 'prompt_template' 的代码块
    const promptTemplateBlocks = allBlocks.filter(block => block.type === 'Prompt_template');
    // 遍历所有符合条件的代码块
    for (const block of promptTemplateBlocks) {
        if(ProjectCreatePrompt.indexOf(block.id) === -1){
            CreatePromptarea(block);
        }
    }
}

function CreatePromptarea(promptblock){
    ProjectCreatePrompt.push(promptblock.id);
    var prompttemplate = document.createElement("textarea");
    prompttemplate.setAttribute("id",promptblock.id);
    prompttemplate.setAttribute("class","ProjectPromptTemplate");
    prompttemplate.setAttribute("readonly","readonly");
    PromptContent = document.getElementById("PromptConsoleValue");
    PromptContent.appendChild(prompttemplate);
    var prompttemplatevalue = "";
    var promptvalueId = [];
    var promptcode = [];
    var promptname =promptblock.getFieldValue("Prompt_Name");
    var targetBlock = promptblock.getInputTargetBlock('prompt_value');

    if(targetBlock){
      ProjectCreateExample.push(targetBlock.id);
      promptvalueId.push(targetBlock.id);
      promptcode.push(targetBlock.getFieldValue("Example_value"));
      while(targetBlock.nextConnection.isConnected()){
          targetBlock = targetBlock.getNextBlock();
          ProjectCreateExample.push(targetBlock.id);
          promptvalueId.push(targetBlock.id);
          promptcode.push(targetBlock.getFieldValue("Example_value"));
      }
      RunPromptValues[promptblock.id] = {};
      for(var j = 0; j < promptvalueId.length; j++){
          var promptexample = document.createElement("textarea");
          promptexample.setAttribute("parentid",promptblock.id);
          promptexample.setAttribute("id",promptvalueId[j]);
          promptexample.setAttribute("class","ProjectPromptExample");
          promptexample.value = PromptValues[promptname][promptcode[j]];
          RunPromptValues[promptblock.id][promptvalueId[j]] = PromptValues[promptname][promptcode[j]];
          prompttemplatevalue += promptexample.value + "\n";
          var PromptContent = document.getElementById("PromptConsoleValue");
          PromptContent.appendChild(promptexample);
      }
      prompttemplate.value = prompttemplatevalue;
    }
}
function CreateRunPromptarea(promptblock){
    ProjectCreatePrompt.push(promptblock.id);
    var prompttemplate = document.createElement("textarea");
    prompttemplate.setAttribute("id",promptblock.id);
    prompttemplate.setAttribute("class","ProjectPromptTemplate");
    prompttemplate.setAttribute("readonly","readonly");
    PromptContent = document.getElementById("PromptConsoleValue");
    PromptContent.appendChild(prompttemplate);
    var prompttemplatevalue = "";
    var promptvalueId = [];
    var promptcode = [];
    var promptname =promptblock.getFieldValue("Prompt_Name");
    var targetBlock = promptblock.getInputTargetBlock('prompt_value');

    if(targetBlock){
      ProjectCreateExample.push(targetBlock.id);
      promptvalueId.push(targetBlock.id);
      promptcode.push(targetBlock.getFieldValue("Example_value"));
      while(targetBlock.nextConnection.isConnected()){
          targetBlock = targetBlock.getNextBlock();
          ProjectCreateExample.push(targetBlock.id);
          promptvalueId.push(targetBlock.id);
          promptcode.push(targetBlock.getFieldValue("Example_value"));
      }
      // RunPromptValues[promptblock.id] = {};
      for(var j = 0; j < promptvalueId.length; j++){
          var promptexample = document.createElement("textarea");
          promptexample.setAttribute("parentid",promptblock.id);
          promptexample.setAttribute("id",promptvalueId[j]);
          promptexample.setAttribute("class","ProjectPromptExample");
          promptexample.value = RunPromptValues[promptblock.id][promptvalueId[j]];
          // RunPromptValues[promptblock.id][promptvalueId[j]] = PromptValues[promptname][promptcode[j]];
          prompttemplatevalue += promptexample.value + "\n";
          var PromptContent = document.getElementById("PromptConsoleValue");
          PromptContent.appendChild(promptexample);
      }
      prompttemplate.value = prompttemplatevalue;
    }
}
function CreatePromptEvent(primaryEvent) {
  if (primaryEvent instanceof Blockly.Events.Ui) {
    return;
  }
  var promptexample = '';
  var PromptContent = '';
  var prompttemplate = '';
  if(primaryEvent instanceof Blockly.Events.BlockCreate){
    var promptBlock = primaryEvent.xml;
    var promptBlockType = promptBlock.getAttribute('type');
    var promptBlockId = promptBlock.getAttribute('id');
    // 如果创建的是prompt template 框架
    if(promptBlockType === 'Prompt_template'){
        var PromptTemplateValue = "";
        CreatePrompt.push(promptBlockId);
        // 如果从prompt workspace中创建了一个prompt template block含有example，在创建prompt template的text area时也创建prompt example的text area
        if(PromptWorkspace.getBlockById(promptBlockId).getInputTargetBlock('prompt_value')){
            var promptvalueId = [];
            var promptcode = [];
            var promptname = PromptWorkspace.getBlockById(promptBlockId).getFieldValue("Prompt_Name");
            var targetBlock = PromptWorkspace.getBlockById(promptBlockId).getInputTargetBlock('prompt_value');
            CreateExample.push(targetBlock.id);
            promptvalueId.push(targetBlock.id);
            promptcode.push(targetBlock.getFieldValue("Example_value"));
            while(targetBlock.nextConnection.isConnected()){
                targetBlock = targetBlock.getNextBlock();
                CreateExample.push(targetBlock.id);
                promptvalueId.push(targetBlock.id);
                promptcode.push(targetBlock.getFieldValue("Example_value"));
            }
            for(var j = 0; j < promptvalueId.length; j++){
                promptexample = document.createElement("textarea");
                promptexample.setAttribute("id",promptvalueId[j]);
                promptexample.setAttribute("class","promptexample");
                promptexample.value = PromptValues[promptname][promptcode[j]];
                PromptTemplateValue += promptexample.value + "\n";
                PromptContent = document.getElementById("PromptContentDiv");
                PromptContent.appendChild(promptexample);
            }
        }
        prompttemplate = document.createElement("textarea");
        prompttemplate.setAttribute("id",promptBlockId);
        prompttemplate.setAttribute("class","prompttemplate");
        prompttemplate.setAttribute("readonly","readonly");
        prompttemplate.value = PromptTemplateValue;
        PromptContent = document.getElementById("PromptContentDiv");
        PromptContent.appendChild(prompttemplate);
    }
    if(promptBlockType === 'Example'){
        CreateExample.push(promptBlockId);
        promptexample = document.createElement("textarea");
        promptexample.setAttribute("id",promptBlockId);
        promptexample.setAttribute("class","promptexample");
        promptexample.setAttribute("placeholder","Please input prompt...")
        PromptContent = document.getElementById("PromptContentDiv");
        PromptContent.appendChild(promptexample);
    }
  }
  if(primaryEvent.type === "click"){
        if(primaryEvent.targetType === 'block'){
            document.getElementById("PromptContentDiv").style.width="100%";
            // document.getElementById("PromptContentDiv").style.height="45%";
            var prompt = document.getElementById(primaryEvent.blockId);
            var i;
            for(i = 0;i < CreateExample.length;i++){
                document.getElementById(CreateExample[i]).style.display = "none";
            }
            for(i = 0;i < CreatePrompt.length;i++){
                document.getElementById(CreatePrompt[i]).style.display = "none";
            }
            if(prompt.getAttribute("class") === 'prompttemplate'){
                 PromptTemplateShownId = primaryEvent.blockId;
                 Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
                 var promptblock = PromptWorkspace.getBlockById(primaryEvent.blockId);
                 var promptvalue = '';
                 var tragetblock = promptblock.getInputTargetBlock('prompt_value');
                 if(tragetblock){
                     promptvalue += document.getElementById(tragetblock.id).value + "\n";
                     while(tragetblock.nextConnection.isConnected()){
                         tragetblock = tragetblock.getNextBlock();
                         promptvalue += document.getElementById(tragetblock.id).value + "\n";
                     }
                     prompt.value = promptvalue;
                 }
            }
            else if(prompt.getAttribute("class") === 'promptexample'){
                prompt.placeholder ="Please input " + PromptWorkspace.getBlockById(primaryEvent.blockId).getFieldValue('Example_value')
            }
            prompt.style.display = "block";
        }
    }
}

// create a textarea for user to see the prompt value from main workspace
function ShowPromptEvent(primaryEvent) {
  if (primaryEvent instanceof Blockly.Events.Ui) {
    return;
  }
  if (primaryEvent instanceof Blockly.Events.BlockCreate) {
     handleNewBlocks();
  }
  if(primaryEvent.type !== "click" && primaryEvent.type !== "selected" && primaryEvent.type !== "toolbox_item_select" && primaryEvent.type !== "viewport_change"){
      document.getElementById("Save_Project_Name").style.color = "red";
  }

  if(primaryEvent.type === "finished_loading"){
        const allBlocks = demoWorkspace.getAllBlocks();
        // 过滤出类型为 'prompt_template' 的代码块
        const promptTemplateBlocks = allBlocks.filter(block => block.type === 'Prompt_template');
        // 遍历所有符合条件的代码块
        for (const block of promptTemplateBlocks) {
            if(ProjectCreatePrompt.indexOf(block.id) === -1){
                CreateRunPromptarea(block);
            }
        }
        document.getElementById("Save_Project_Name").style.color = "black";
  }
  if(primaryEvent instanceof Blockly.Events.BlockCreate) {
      var promptBlock = primaryEvent.xml;
      var promptBlockType = promptBlock.getAttribute('type');
      var promptBlockId = promptBlock.getAttribute('id');
      if (promptBlockType === 'Example') {
          ProjectCreateExample.push(promptBlockId);
          var promptexample = document.createElement("textarea");
          promptexample.setAttribute("id", promptBlockId);
          promptexample.setAttribute("class", "ProjectPromptExample");
          promptexample.setAttribute("placeholder", "Please input prompt...")
          var PromptContent = document.getElementById("PromptConsoleValue");
          PromptContent.appendChild(promptexample);
      }
  }
    // 如果创建的是prompt template 框架
  if(primaryEvent.type === "click"){
        if(primaryEvent.targetType === 'block'){
            var promptblock = demoWorkspace.getBlockById(primaryEvent.blockId);
            if(promptblock.type !== "Prompt_template" && promptblock.type !== "Example"){
                return;
            }
            var i;
            for(i = 0;i < ProjectCreateExample.length;i++){
                document.getElementById(ProjectCreateExample[i]).style.display = "none";
            }
            for(i = 0;i < ProjectCreatePrompt.length;i++){
                document.getElementById(ProjectCreatePrompt[i]).style.display = "none";
            }
            var prompt = document.getElementById(primaryEvent.blockId);
            if(prompt.getAttribute("class") === 'ProjectPromptTemplate'){
                 Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
                 var tragetblock = promptblock.getInputTargetBlock('prompt_value');
                 if(tragetblock){
                     var promptvalue = '';
                     promptvalue += document.getElementById(tragetblock.id).value + "\n";
                     while(tragetblock.nextConnection.isConnected()){
                         tragetblock = tragetblock.getNextBlock();
                         promptvalue += document.getElementById(tragetblock.id).value + "\n";
                     }
                    prompt.value = promptvalue;
                 }
            }
            else if(prompt.getAttribute("class") === 'ProjectPromptExample'){
                prompt.placeholder ="Please input " + demoWorkspace.getBlockById(primaryEvent.blockId).getFieldValue('Example_value')
            }
            prompt.style.display = "block";
        }
    }
}

// init the project console
document.getElementById('ModelDiv').style.display='none';
document.getElementById('PromptDiv').style.display='none';
document.getElementById('CodeDiv').style.display='none';

draftwidth("ProjectConsole");

// mian workspace
// Variables category of the main workspace
myCategoryFlyoutVariableback = function(demoWorkspace) {return Variable_xmlList;};
// Prompt category of the main workspace
myCategoryFlyoutDIYCallback = function(demoWorkspace) {return PromptList;};
// Model category of the main workspace
myCategoryFlyoutModelCallback = function(demoWorkspace) {return ModelList;};

// prompt workspace
// Promptbuilder category of the prompt workspace
myCategoryFlyoutPrompttemplateCallback = function(PromptWorkspace) {return PrompttemplateList;};

// model workspace
// Engine category of the model workspace
myCategoryFlyoutready_modelsCallback = function(ModelWorkspace) {return ReadymodelList;};
// AIengine category of the model workspace
myCategoryFlyoutDIYModelCallback = function(ModelWorkspace) {return DIYmodelList;};

PromptWorkspace.registerToolboxCategoryCallback('DIYPrompttemplate', myCategoryFlyoutPrompttemplateCallback);
ModelWorkspace.registerToolboxCategoryCallback('ready_models', myCategoryFlyoutready_modelsCallback);
ModelWorkspace.registerToolboxCategoryCallback('DIYModel', myCategoryFlyoutDIYModelCallback);

initIDE();
upload_project1("chatbot",ChatBot)
// upload_project1("PCR",PCR)
upload_project1("todos2pic",todos2pic)
initIDE();

/*
让demoworkplace自动更新大小
 */
// 选取要监视的元素
const myDiv = document.querySelector('#ProjectDiv');
// 创建 MutationObserver 实例
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        onresize();
    }
  });
});
// 配置 MutationObserver
const config = {
  attributes: true,
  childList: false,
  characterData: false,
  attributeFilter: ['class']
};
// 开始监视
observer.observe(myDiv, config);
const myDiv1 = document.querySelector('#blocklyDiv');
// 创建 MutationObserver 实例
const observer1 = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        onresize();
    }
  });
});
// 配置 MutationObserver
const config1 = {
  attributes: true,
  childList: false,
  characterData: false,
  attributeFilter: ['style']
};
// 开始监视
observer1.observe(myDiv1, config1);


const jsonData = [
  {
    "content": "How are you",
    "input": ["history", "human"],
    "prompt": ["You are a chatbot having a conversation with a human.\n" +
    "\n" +
    "{{chat_history}}\n" +
    "Human: {{human_input}}\n" +
    "Chatbot:\n", "i am miss you"],
    "output": "chatbot",
    "model": "LLM"
  },
    {
    "content": "How are you",
    "input": ["history","human", "chatbot"],
    "prompt": ["chat = \"\"\"{{chat}}\"\"\"\n" +
    "human = \"\"\"Human: {{human}}\"\"\"\n" +
    "bot = \"\"\"Chatbot: {{bot}}\"\"\"\n" +
    "history = chat + \"\\n\" + human + \"\\n\" + bot + \"\\n\"\n" +
    "print(history)\n" +
    "\n", "i am miss you"],
    "output": "history",
    "model": "python"
  },
    {
    "content": "How are you",
    "input": ["history", "human"],
    "prompt": ["You are a chatbot having a conversation with a human.\n" +
    "\n" +
    "{{chat_history}}\n" +
    "Human: {{human_input}}\n" +
    "Chatbot:\n", "i am miss you"],
    "output": "chatbot",
    "model": "LLM"
  },
];
const inittaskcard = {
    "content": "",
    "input": [],
    "prompt": [""],
    "output": ["", 'no'],
    "model": "LLM"
}
const initlogiccard = {
    "input1" : '',
    "logicOperator" : '=',
    'input2': ''
}

$(document).ready(function () {
    $("#addItem").click(function () {
        $("#collapsePrework .card-body").append(addNewItem());
    });

    $(document).on('click', '.delete-button', function () {
        $(this).closest('.prework-item').remove();
    });

    $(document).on('keypress', '.form-control', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            $(this).closest('.prework-item').after(addNewItem());
        }
    });

    $(document).on('click', '.confirm-button', function () {
        // 使用 jQuery 方法访问兄弟元素
        // $(this).siblings('.form-control').toggleClass('border-success');
        var checkIcon = $(this).children()
        checkIcon.each(function() {
            var currentDisplay = $(this).css('display');
            var newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            $(this).css('display', newDisplay);
        });
        // 使用 jQuery 的 attr 方法获取和设置属性
        var data_output = $(this).attr("data-output") === "yes" ? "no" : "yes";

        $(this).attr("data-output", data_output);
    });

    $(document).on('click', '.output-button', function () {
        // 使用 jQuery 方法访问兄弟元素
        // $(this).closest('.worker-card').toggleClass('border-success');
        var checkIcon = $(this).children()
        checkIcon.each(function() {
            var currentDisplay = $(this).css('display');
            var newDisplay = currentDisplay === 'none' ? 'block' : 'none';
            $(this).css('display', newDisplay);
        });
        $(this).attr("data-output", $(this).attr("data-output") === "yes" ? "no" : "yes");
    });
});

// jsonData.forEach((data, index) => {
//     renderData(data, workerindex);
// });

// task分解后step和logic对应的卡片移动
document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('data-container');

  // Initialize Sortable on the card container
  let sortable = new Sortable(cardContainer, {
  group: "shared",
  animation: 150,
  onAdd: function (evt) {
      // Check if the dragged card is a task card or an If card
          if (evt.item.classList.contains('task-card') || evt.item.classList.contains('logic-card')) {
            // Get the parent If card
            const ifCardParent = evt.item.closest('.logic-card');

            // If the parent is an If card, append the dragged card header into it
            if (ifCardParent) {
              ifCardParent.querySelector('.card-body').appendChild(evt.item);
            }
          }
        },
    });
});
function updateJSON(key, value, modelIndex) {
    RunModelConfigs[modelIndex][key][0] = value;
}
function updateEngineJSON(key, value, modelIndex) {
    RunEngineConfigs[modelIndex][key][0] = value;
}

// config 参数信息， ModelId: 实时更新model, EngineId: save or import model 时指定Engine
function generateModelConfigForm(config, ModelId, EngineId) {
      const modelIndex = ModelId;
      const formHtml = `
          ${Object.entries(config).map(([key, value]) => {
            const id = key.replace(' ', '_') + "ModelId";
            if (key === 'Stop sequences'){
              return `
                <div class="mb-3">
                  <label for="${id}" class="form-label">${key}</label>
                  <input type="text" class="form-control" id="${id}" value="${value[0]}" oninput="updateJSON('${key}', this.value, '${modelIndex}')">
                </div>
                <hr>
              `;
            } else {
              return `
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label for="${id}" class="form-label">${key}</label>
                    <input type="number" class="form-control-range" id="${id}Value" value="${value[0]}" oninput="${id}.value=${id}Value.value; updateJSON('${key}', parseFloat(this.value), '${modelIndex}')">
                  </div>
                  <input type="range" class="form-range" min="0" max="${value[2]}" step="${value[1]}" id="${id}" value="${value[0]}" oninput="${id}Value.value=${id}.value;  updateJSON('${key}', parseFloat(this.value), '${modelIndex}')">
                </div>
                <hr>
              `;
            }
          }).join('')}
      `;
      document.getElementById('ModelContentDiv').innerHTML = `<div data-engine-id = '${EngineId}' data-model-id = '${ModelId}' style=";background-color: white;padding-left: 5px;display: block">
           <div class="mb-3">
              <h5 id="Engine_Name">` + ModelWorkspace.getBlockById(EngineId).getFieldValue('LLM_Name') +`</h5>
           </div>
           <hr>` + formHtml + '<\div>';
      document.getElementById('CreateModelDiv').style.height = '50vh';
      document.getElementById('ModelContentDiv').style.display = 'block';
}

const Configuration1 =
{
'temperature': [0.7, 0.01, 1, 'Temperature'],
'max_tokens': [225, 1,4000, 'Maximum length'],
'stop_strs': ['','Stop sequences'],
'top_p': [1, 0.01, 1, 'Top P'],
'frequency_penalty': [0 ,0.01,2,'Frequency penalty'],
'presence_penalty': [0,0.01,2,'Presence penalty'],
// 'Best of': [1,1,20,'Best of'],
};
// generateModelConfigForm(Configuration1, 'initmodel')
function generateEngineConfigForm(config, ModelId, EngineId) {
      const modelIndex = ModelId
      const formHtml = `
          ${Object.entries(config).map(([key, value]) => {
            const id = 'Engine' + key.replace(' ', '_');
            if (key === 'Stop sequences'){
              return `
                <div class="mb-3">
                  <label for="${id}" class="form-label">${value[1]}</label>
                  <input type="text" class="form-control" id="${id}" value="${value[0]}" oninput="updateEngineJSON('${key}', this.value, '${modelIndex}')">
                </div>
                <hr>
              `;
            } else {
              return `
                <div class="mb-3">
                  <div class="d-flex justify-content-between">
                    <label for="${id}" class="form-label">${value[3]}</label>
                    <input type="number" class="form-control-range" id="${id}Value" value="${value[0]}" oninput="${id}.value=${id}Value.value; updateEngineJSON('${key}', parseFloat(this.value), '${modelIndex}')">
                  </div>
                  <input type="range" class="form-range" min="0" max="${value[2]}" step="${value[1]}" id="${id}" value="${value[0]}" oninput="${id}Value.value=${id}.value;  updateEngineJSON('${key}', parseFloat(this.value), '${modelIndex}')">
                </div>
                <hr>
              `;
            }
          }).join('')}
      `;
      document.getElementById('EngineConsoleValue').innerHTML = `<div style=";background-color: white;padding-left: 5px;display: block">
            <br>` + formHtml + '<\div>';
}

