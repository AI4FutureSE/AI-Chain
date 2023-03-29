const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
require('dotenv').config()
var fs = require('fs')
var path = require('path')

app.use(express.static(__dirname))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/sendMsg', urlencodedParser, (req, res) => {
    console.log('Message sending:', req.body);
    openaiConnection(req.body.message).then((openaiRes) => {
        console.log(openaiRes.data)
        res.json({code:1, answer: openaiRes.data.choices[0].text});
    }).catch((err) =>{
        console.error(err)
        res.json({code: -1});
    })
});

app.post('/codeResult', urlencodedParser, (req, res)=>{
    let resultCodePath = path.join(__dirname, '/public/doc', 'result.txt')
    fs.readFile(resultCodePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Load result from', resultCodePath);
        res.json({code: data})
    });
})

app.listen(3333, function (){
    console.log('visit http://localhost:3333/')
})


// openai chatGPT
async function openaiConnection(prompt){
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        organization: 'org-L4Y94uCZ2IKjOipmkW2HEAsj',
        apiKey: process.env.Openai_APIKey,
    });
    const openai = new OpenAIApi(configuration);
    return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2000,
        stream: false
    });
}
