const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var fs = require('fs')
var path = require('path')
const {Configuration, OpenAIApi} = require("openai");
const {response} = require("express");
const url = require("url");
const {copyFileSync} = require("fs");
require('dotenv').config()

const dataDir = '/data/conversations'
const conversationRoot = path.join(__dirname, dataDir)

app.use(express.static('.'))
app.use(express.static(__dirname))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/data'))
app.use(express.static(__dirname + '/conversations'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/sendMsg', urlencodedParser, (req, res) => {
    console.log('Message sending:', req.body);
    openaiConnection(req.body.message).then((openaiRes) => {
        // console.log(openaiRes.data)
        res.json({code:1, answer: openaiRes.data.choices[0].text});
    }).catch((err) =>{
        console.error(err)
        res.json({code: -1});
    })
});

app.post('/saveConv', urlencodedParser, function (req, res){
    // let jsonFileName = __dirname + '/data/' + Date.now().toString() + '.json'
    let jsonFileName = path.join(conversationRoot, req.body.id + '.json')
    let conversation = JSON.stringify(req.body, null, 2)
    // save json to file
    fs.writeFile(jsonFileName, conversation, 'utf-8', function (err) {
        if (err) return console.log(err)
        console.log('Saved json to ' + jsonFileName)
        res.json({jsonFile: path.join(dataDir, req.body.id + '.json')})
    })
})

app.post('/readConv', urlencodedParser, function (req, res){
    let jsonFileName = path.join(conversationRoot, req.body.id + '.json')
    fs.readFile(jsonFileName, 'utf-8',function (err, data){
        if (err) return console.log(err)
        console.log('Read json from ' + jsonFileName);
        res.json(JSON.parse(data))
    })
})

app.post('/removeConv', urlencodedParser, function (req, res){
    let jsonFileName = path.join(conversationRoot, req.body.id + '.json')
    fs.unlink(jsonFileName, function (err){
        if (err) return console.log(err)
        console.log('Remove file', jsonFileName)
        res.json(1)
    })
})

app.post('/loadAllConv', urlencodedParser, function (req, res){
    let conversations = []
    let fileNum = 0
    fs.readdir(conversationRoot, function (err, files){
        if (err) return console.log(err)
        files.forEach(function (file){
            fs.readFile(path.join(conversationRoot, file), 'utf-8', function (err,data){
                if (err) return console.log(err)
                conversations.push(JSON.parse(data))
                // send back conversations after reading all files
                fileNum += 1
                if (fileNum === files.length){
                    res.json({convs: conversations})
                }
            })
        })
    })
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
