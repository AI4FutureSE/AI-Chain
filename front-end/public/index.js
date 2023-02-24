$(document).ready(()=>{
    const questions = ["Which type of stakeholder are you?",
        "Which industry sector are you from?",
        "What type of AI technology is involved?"]

    const options = [["Manager", "Technician", "Consultant", "Client", "Board Member", "Regulator", 'Investor'],
        ["Health", "Mining", "Law", "Finance", "Agribusiness", "Cyber Security", "Education", "Defence", "Infrastructure", "Manufacturing", "R&D or Innovation", "Environment"],
        ["Machine leaning", "Language processing", "Robotics", "Knowledge representation", "Computer vision", "Do not know"]]

    const principles = ['Well-bing', 'Values', 'Fairness', 'Privacy and Security', 'Reliability', 'Transparency', 'Contestability', 'Accountability']
    const principleQuestion = ['establish mechanisms to measure the environmental impact of the AI system’s development, deployment and use (for example the type of energy used by the data centres)',
        'build up awareness/assessment on fundamental rights of users/ impact groups/wider community',
        'test (using tools) for bias testing e.g., gender-based testing, minority group testing',
        'discuss the need of personal data, limited access to such personal data, impact of using personal data etc.',
        'define assessments on the vulnerabilities',
        'avoid the lack of understanding around the level of task complexity of the AI system',
        'prevent the absence of a cost effective/easy method to appeal a decision made by your system',
        'Who is accountable for the accuracy of the answers']
    const raiKeywords = principles.concat(['Vulnerability', 'Privacy', 'Regulatory', 'Safety', 'bias', 'accountability', 'privacy', 'security'])
    const principleIds = ['w2', 'v3', 'f4', 'p1', 'r6', 't8', 'c3', 'a7']
    const raiLinks = ['https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/continuous-rai-validator/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/rai-risk-assessment/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/fairness-measurement/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/random-noise-data-generator/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/multi-model-decision-maker/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/standardized-reporting/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/ai-mode-switcher/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/role-level-accountability/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/role-level-accountability/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/random-noise-data-generator/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/xai-interface/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/rai-black-box/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/standardized-reporting/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/role-level-accountability/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/random-noise-data-generator/',
        'https://research.csiro.au/ss/science/projects/responsible-ai-pattern-catalogue/random-noise-data-generator/'
        ]

    // ***********
    // Initial loading
    // ***********
    createNewConvWrapper()
    loadAllConvToCards()
    showRightBar()


    // ***********
    // Left-bar
    // ***********
    // tool tips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // Slide user type while hovering
    let slideDelay = 300
    let userType = 'Enquirer'
    $('.user-icon-container').hover(function (){
        $('.user-icon-nonselect.user-icon-expertise').css({
            'transform': 'translateX(40px)'
        })
        $('.user-icon-nonselect.user-icon-enquirer').css({
            'transform': 'translateX(115px)'
        })
    }, function (){
        $('.user-icon-nonselect.user-icon-expertise').css({
            'transform': 'translateX(-37px)'
        })
        $('.user-icon-nonselect.user-icon-enquirer').css({
            'transform': 'translateX(37px)'
        })
    })
    // Switch user
    function toggleLeftOpts(slideDelay=300){
        let optEnquirer = $('.opts-enquirer')
        let optExpertise = $('.opts-expertise')
        if (optExpertise.is(':visible')){
            optExpertise.slideUp(slideDelay)
            setTimeout(()=>{optEnquirer.slideDown()}, slideDelay)
        }
        else{
            optEnquirer.slideUp(slideDelay)
            setTimeout(()=>{optExpertise.slideDown()}, slideDelay)
        }
    }
    $(document).on('click', '.user-icon-nonselect', function (){
        let slideDelay = 300
        // switch user icon on the left nav bar
        $('.user-icon-select').addClass('user-icon-nonselect')
        $('.user-icon-select').removeClass('user-icon-select')
        $(this).addClass('user-icon-select')
        $(this).removeClass('user-icon-nonselect')
        if ($(this).hasClass('user-icon-expertise')){
            $(this).css({
                'transform': 'translateX(-37px)'
            })
            userType = 'Expertise'
        }
        else if ($(this).hasClass('user-icon-enquirer')){
            $(this).css({
                'transform': 'translateX(37px)'
            })
            userType = 'Enquirer'
        }
        $('.user-role').text(userType)
        // switch user options
        toggleLeftOpts(300)
        // switch expertise enquires page
        let chatPage = $('.chat-page')
        let expertisePage = $('.enquires-page-expertise')
        if (userType === 'Enquirer'){
            expertisePage.slideUp(slideDelay)
            setTimeout(()=>{chatPage.slideDown()}, slideDelay)
            createNewConvWrapper()
            showRightBar()
            $('.reminder-wrapper').slideUp(slideDelay)
        }
        else{
            chatPage.slideUp()
            setTimeout(()=>{expertisePage.slideDown()}, slideDelay)
            hideRightBar()
        }
    })
    // new conversation
    $('#conversation-new').click(function (){
        newConversation()
    })
    $('#check-enquire').click(function (){
        $('.chat-page').slideUp(300)
        setTimeout(()=>{$('.enquires-page-expertise').slideDown()}, 300)
    })
    // import conversation from file
    $('#importInput').change(function (event){
        let reader = new FileReader()
        reader.onload = function (e){
            // read the uploaded file
            let conversation = JSON.parse(JSON.parse(e.target.result).conversation)  //[{'user':, 'message':[]}]
            loadConvInWrapper(conversation)
        }
        reader.readAsText(event.target.files[0])
        $(this).val('')
        alert('Import successfully')
        $('.input-wrapper').slideDown('fast')
    })


    // ***********
    // Right-bar
    // ***********
    // click to show right bar conversation history
    function showRightBar(){
        let right = $('#right-sidebar')
        let middle = $('#middle-page')
        if (!right.hasClass('hidden')){
            return
        }
        right.animate({"margin-right": '+=270'})
        right.removeClass('hidden')
        middle.animate({'width': '-=270'})
    }
    function hideRightBar(){
        let right = $('#right-sidebar')
        let middle = $('#middle-page')
        if (right.hasClass('hidden')){
            return
        }
        right.animate({"margin-right": '-=270'})
        right.addClass('hidden')
        middle.animate({'width': '+=270'})
    }
    $('#conversation-history').click(() =>{
        // hide
        if (!$('#right-sidebar').hasClass('hidden')){
            hideRightBar()
        }
        // show
        else {
            showRightBar()
        }
    })
    // hide the right bar while clicking on the middle page
    $('#middle-page').click(function (){
        let right = $('#right-sidebar')
        if (! right.hasClass('hidden')){
            right.animate({"margin-right": '-=270'})
            right.addClass('hidden')
            $(this).animate({'width': '+=270'})
        }
    })


    // ***********
    // Middle page
    // ***********
    let editChange = false
    // click on the expertise's answer to start editing
    $(document).on('click', '.dialog-expertise>.dialog-msg-wrapper>.dialog-msg', function (){
        if (userType === 'Expertise'){
            $('.dialog-msg-editing').removeClass('dialog-msg-editing')
            $(this).addClass('dialog-msg-editing')
            $('.bottom-reminder').html('Click on <span style="color: orangered">anywhere outside the answer</span> to finish editing')
        }
    })
    // click outside of the dialog-msg-editing to end the editing
    $(document).on('click', function (event){
        // end editing
        if ($(event.target).closest('.dialog-msg-editing').length === 0 &&
            $('.dialog-msg-editing').length > 0){
            // change style
            $('.dialog-msg-editing').removeClass('dialog-msg-editing')
            $('.bottom-reminder').html('Click on the <span style="color: orangered">Expertise\'s answer</span> to edit')
            // update backend file if changed
            if (editChange){
                // update the conversation file on the backend
                $.ajax({
                    url: '/saveConv',
                    type: 'post',
                    data: {
                        'id': $('.conversation-wrapper').attr('id'),
                        'user': userType,
                        'conversation': JSON.stringify(extractConversationText())
                    },
                    success: function (res){
                        generateConvCard(extractConversationText(), $('.conversation-wrapper').attr('id'))
                    },
                    error: function (res){
                        alert('Error in updating backend file')
                        console.log(res)
                    }
                })
                editChange = false
            }
        }
    })
    // monitor if any changes
    $(document).on('input', '.dialog-msg-editing', function (){
        editChange = true
    })


    // ***********
    // conversation card
    // ***********
    // remove card and delete conversation file on the backend
    $(document).on('click', '.card-remove', function (){
        let card = $(this).parents().closest('.conversation-card')
        $.ajax({
            url: '/removeConv',
            type: 'post',
            data: {
                id: card.attr('data-conv-target')
            },
            success:function (){
                card.remove()
            },
            error: function (res){
                alert('Error when deleting conversation')
                console.log(res)
            }
        })
    })
    // stop firing the parent's onclick while clicking on the child element
    $(document).on('click', '.conversation-card .card-remove', function (e){
        e.stopPropagation()
    })
    // click the conv card to fetch the conversation
    $(document).on('click', '.conversation-card', function (){
        $.ajax({
            url: '/readConv',
            type: 'post',
            data: {
                'id': $(this).attr('data-conv-target'),
                'user': userType,
                'conversation': JSON.stringify(extractConversationText())
            },
            success: function (res){
                // @res: {conversation:[{user:, message:[]}], id:, user:}
                generateConversationWrap(res)
                // hide the expertise page
                if(userType === 'Expertise'){
                    $('.enquires-page-expertise').slideUp(slideDelay)
                    setTimeout(()=>{$('.chat-page').slideDown()}, slideDelay)
                    $('.input-wrapper').slideUp(slideDelay)
                    $('.reminder-wrapper').slideDown(slideDelay)
                }
                // for enquirer, show input bar
                else{
                    $('.input-wrapper').slideDown(slideDelay)
                }
            },
            error: function (res){
                alert('Error')
                console.log(res)
            }
        })
    })
    // load all conversations stored on the backend to cards
    function loadAllConvToCards(){
        $.ajax({
            url: '/loadAllConv',
            type: 'post',
            success: function (res){
                // @ res.conv: [{id:'conv-1234', user:, conversation:[]}]
                res.convs.forEach(function (conv){
                    generateConvCard(JSON.parse(conv.conversation), conv.id)
                })
            },
            error: function (res){
                alert('Error while loading conversation to cards')
                console.log(res)
            }
        })
    }


    // ***********
    // conversation transmission
    // ***********
    // input message
    $('#msgForm').submit(function (e){
        // * display the input message in the conversation wrapper
        let currentDialog = $('.conversation-dialog').last()
        let convWrapper = $('.conversation-wrapper')
        let msgInput = $('#msgInput')
        let sendBtn = $('.btn-msg')

        let message = addonEnquiry(msgInput.val())

        // if send from the same user, append message in current dialog
        if (currentDialog.attr('data-role') === userType){
            currentDialog.find('.dialog-msg-wrapper').append(generateMessage(message))
        }
        // else create a new dialog
        else{
            convWrapper.append(generateDialog(userType, message))
        }
        convWrapper.animate({
            scrollTop: convWrapper.prop('scrollHeight')
        }, 500)
        // wait for response
        msgInput.val('')
        msgInput.attr('disabled','disabled')
        msgInput.attr('placeholder', 'Waiting for response ...')
        sendBtn.attr('disabled','disabled')
        sendBtn.html('<i class="bi bi-three-dots"></i>')

        // * send input message to server through ajax
        e.preventDefault()
        $.ajax({
            url: '/sendMsg',
            type: 'post',
            data:{
                'user': userType,
                'message': message
            },
            success: function (res){
                if (res.code === -1){
                    alert("Connection to Server Error")
                }
                else {
                    // add addon to the answer
                    let answer = addonAnswer(res.answer)
                    // add the answer to the webpage
                    convWrapper.append(generateDialog('Expertise', answer))
                    convWrapper.animate({
                        scrollTop: convWrapper.prop('scrollHeight')
                    }, 500)

                    // update the conversation file on the backend
                    $.ajax({
                        url: '/saveConv',
                        type: 'post',
                        data: {
                            'id': convWrapper.attr('id'),
                            'user': userType,
                            'conversation': JSON.stringify(extractConversationText())
                        },
                        success: function (res){
                            generateConvCard(extractConversationText(), $('.conversation-wrapper').attr('id'))
                            msgInput.removeAttr('disabled')
                            msgInput.attr('placeholder', 'Ask something')
                            $('.btn-msg').removeAttr('disabled')
                            sendBtn.html('<i class="bi bi-send-fill"></i>')
                        },
                        error: function (res){
                            alert('Error in updating backend file')
                            console.log(res)
                        }
                    })
                }
            },
            error: function (res){
                alert('Error in sending message')
                console.log(res)
                msgInput.removeAttr('disabled')
            }
        })
    })
    // export conversation
    $('.conversation-export').click(function (){
        let conversation = extractConversationText()
        if (conversation.dialogs.length === 0){
            alert("No Enquires yet, please ask questions first")
            return
        }
        // write down into json file and download
        $.ajax({
            url: '/saveConv',
            type: 'post',
            data: {
                'id': $('.conversation-wrapper').attr('id'),
                'user': userType,
                'conversation': JSON.stringify(conversation)
            },
            success: function (res){
                // download json file
                let link=document.createElement('a');
                link.href = res.jsonFile
                link.download = res.jsonFile
                link.click()
            },
            error: function (res){
                alert('Error')
                console.log(res)
            }
        })
    })
    // creat new conversation and save the current one to the backend
    function newConversation(){
        let conversation = extractConversationText()   // {'questions':[{'q':, 'a':}], 'dialogs':[{'user':, 'message':[]}]}
        // save to the backend if there are any dialogs
        if (conversation.dialogs.length > 0){
            let convID = $('.conversation-wrapper').attr('id')
            // save to backend
            $.ajax({
                url: '/saveConv',
                type: 'post',
                data: {
                    'id': convID,
                    'user': userType,
                    'conversation': JSON.stringify(conversation)
                },
                success: function (res){
                    // if no associated card for the conversation add a new card
                    if ($('.conversation-card[data-conv-target="' + convID +'"]').length === 0){
                        // if successfully add card, show the right side bar
                        generateConvCard(conversation, $('.conversation-wrapper').attr('id'))
                    }
                },
                error: function (res){
                    alert('Error')
                    console.log(res)
                }
            })
            showRightBar()
        }
        // refresh page
        createNewConvWrapper()
    }


    // ***********
    // conversation content extraction and loading
    // ***********
    // load and present the conversation on the middle page convWrapper
    // @param conversation: {'questions':[{'q':, 'a':}], 'dialogs':[{'user':, 'message':[]}]}
    function loadConvInWrapper(conversation){
        // load the pre-questions to the page
        let convWrapper = $('.conversation-wrapper')
        convWrapper.empty()
        convWrapper.append(generateQuestions(conversation.questions))
        // load the dialogs to the page
        for (let i = 0; i < conversation.dialogs.length; i++){
            let dialog = conversation.dialogs[i]
            convWrapper.append(generateDialog(dialog.user, dialog.message[0]))
            for (let j = 1; j < dialog.message.length; j ++){
                $('.dialog-msg-wrapper').last().append(generateMessage(dialog.message[j]))
            }
        }
    }
    // extract the pre-questions and the user dialogs as json data
    // @return conversation: {'questions':[{'q':, 'a':}], 'dialogs':[{'user':, 'message':[]}]}
    function extractConversationText(){
        // console.log({'question':extractPreQuestions(), 'dialogs':[extractDialogs()]})
        return  {'questions':extractPreQuestions(), 'dialogs':extractDialogs()}
    }
    // extract the pre-questions as json data
    // @return questions: [{'q':, 'a':}]
    function extractPreQuestions(){
        let questions = []
        let questionWrapper = $('.dialog-question>.dialog-msg-wrapper')
        let questionElements = questionWrapper.find('.msg-question')
        for (let i = 0; i < questionElements.length; i++){
            let question = $(questionElements[i])
            let options = $('[data-question-target=' + question.attr('id') + ']')
            let selectedOption = options.find('.option-active')
            if (selectedOption.length > 0){
                questions.push({'q':question.text(), 'a':selectedOption.text()})
            }
        }
        return questions
    }
    // extract the user dialogs as json data
    // @return dialogs: [{'user':, 'message':[]}]
    function extractDialogs(){
        let dialogs = []
        let convWrapper = $('.conversation-wrapper')
        for (let i = 1; i < convWrapper.children().length; i++){
            let dialogWrapper = $(convWrapper.children()[i])
            let message = dialogWrapper.find('.dialog-msg')
            let dialog = {'user': dialogWrapper.attr('data-role'), 'message':[]}
            for (let j = 0; j < message.length; j ++){
                dialog.message.push($(message[j]).text())
            }
            dialogs.push(dialog)
        }
        return dialogs
    }
    // $('#btn-test').click(function (){})


    // ***********
    // Dialog rendering
    // ***********
    // middle page
    function createNewConvWrapper(){
        $('.conversation-wrapper').remove()
        let convID = Date.now()
        // let timeStamp = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"})
        let convWrapperHTML = '<div id="conv-' + convID + '" class="conversation-wrapper">' +
            '<div class="conversation-dialog dialog-question" data-role="Expertise">' +
            '    <div class="dialog-portrait">' +
            '         <img src="images/expertise.jpg" class="dialog-portrait-img">' +
            '          <p class="dialog-portrait-name">Expertise</p>' +
            '    </div>' +
            '    <div class="dialog-msg-wrapper">' +
            '    </div>' +
            '</div>' +
            '</div>'
        $('.chat-page').append(convWrapperHTML)
        askQuestion(0)
    }
    function generateMessage(msg){
        return '<p class="dialog-msg">'+ msg +"</p>"
    }
    function generateDialog(user, msg){
        let dialogHTML = "<div class=\"conversation-dialog dialog-" + user.toLowerCase() + "\" data-role=\"" + user + "\">\n" +
            "    <div class=\"dialog-portrait\">\n" +
            "        <img src=\"images/" + user.toLowerCase() + ".jpg\" class=\"dialog-portrait-img\">\n" +
            "        <p class=\"dialog-portrait-name\">" + user + "</p>\n" +
            "    </div>\n" +
            "    <div class=\"dialog-msg-wrapper\">\n" +
            "        <p class=\"dialog-msg\">" + msg + "</p>\n" +
            "    </div>\n" +
            "</div>"
        let dialogWrapper = $(dialogHTML)
        // make the answer editable for expertise
        if (userType === 'Expertise' && user === 'Expertise'){
            dialogWrapper.find('.dialog-msg').attr('contentEditable', true)
            dialogWrapper.find('.dialog-msg').attr('data-bs-toggle', 'tooltip')
            dialogWrapper.find('.dialog-msg').attr('data-bs-placement', 'top')
            dialogWrapper.find('.dialog-msg').attr('title', 'Click to edit answer')
        }
        return dialogWrapper
    }
    function generateConversationWrap(convInfo){
        //@convInfo: {conversation:[{user:, message:[]}], id:, user:}
        let convWrapperHTML = '<div id="' + convInfo.id + '" class="conversation-wrapper"></div>'
        $('.conversation-wrapper').remove()
        $('.chat-page').append(convWrapperHTML)
        loadConvInWrapper(JSON.parse(convInfo.conversation))
    }
    // generate HTML element for the pre-questions and options
    // @param convQuestions: [{'q':, 'a':}]
    // @return questionWrapper: the conversation-dialog element that is to be appended on conversation-wrapper
    function generateQuestions(convQuestions){
        let questionWrapper = $('<div class="conversation-dialog dialog-question" data-role="Expertise">' +
            '<div class="dialog-portrait">\n' +
            '    <img src="images/expertise.jpg" class="dialog-portrait-img">\n' +
            '    <p class="dialog-portrait-name">Expertise</p>\n' +
            '</div>' +
            '</div>')
        let msgWrapper = $('<div class="dialog-msg-wrapper"></div>')

        for(let i = 0; i < questions.length; i ++){
            let HTMLquestion = '<p id="question-' + i + '" class="dialog-msg msg-question">' + questions[i] + '</p>\n'
            let HTMLoptions = '<div class="msg-option" data-question-target="question-' + i + '"> </div>\n'
            let optionWrapper = $(HTMLoptions)
            for (let j = 0; j < options[i].length; j ++){
                if (options[i][j] === convQuestions[i].a){
                    optionWrapper.append('<p class="option option-active" data-opt-no="' + i + '">' + options[i][j] + '</p>')
                }
                else{
                    optionWrapper.append('<p class="option" data-opt-no="' + i + '">' + options[i][j] + '</p>')
                }
            }
            msgWrapper.append(HTMLquestion)
            msgWrapper.append(optionWrapper)
        }
        questionWrapper.append(msgWrapper)
        return questionWrapper
    }
    // right-side bar
    // generate brief of the conversation into card
    // @param conversation: {'questions':[{'q':, 'a':}], 'dialogs':[{'user':, 'message':[]}]}
    function generateConvCard(conversation, convID){
        if (conversation.dialogs.length === 0) return
        // remove existing card
        $('.conversation-card[data-conv-target="' + convID +'"]').remove()
        // generate new conv card
        let title = conversation.dialogs[0].message
        let user = conversation.questions[0].a
        let content = conversation.dialogs[1].message
        // if (conversation.length > 1) content = conversation[1].message
        let cardHTML = '<div class="conversation-card" data-conv-target="' + convID + '">\n' +
            '    <div class="go-corner">\n' +
            '        <div class="card-remove">\n' +
            '            x\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <p class="con-card-title">' + title + '</p>\n' +
            '    <p class="con-card-subtitle">' + user + '</p>\n' +
            '    <p class="con-card-content">' + content + '</p>\n' +
            '</div>'
        $('#right-sidebar').append(cardHTML)
        $('.enquire-wrapper').append(cardHTML)
    }


    // ***********
    // Chatbot
    // ***********
    $(document).on('click','.option', function (){
        let questionTarget = $(this).parents().closest('.msg-option').attr('data-question-target')
        let questionNo = parseInt(questionTarget.substr(questionTarget.lastIndexOf('-') + 1))
        // remove all shown later questions
        for (let i = questionNo + 1; i < questions.length; i++){
            $('#question-' + i).remove()
            $('[data-question-target=question-' + i + ']').remove()
        }
        // remove all questions and answers
        $('.dialog-enquirer').remove()
        $('.dialog-expertise').remove()
        // popup the next question
        let userInputWrapper = $('.input-wrapper')
        if (questionNo < questions.length - 1){
            askQuestion(questionNo + 1)
            userInputWrapper.slideUp('fast')
        }
        else if (userInputWrapper.is(':hidden')){
            userInputWrapper.slideDown("fast")
        }
        // set the clicked option as active
        $(this).siblings().removeClass('option-active')
        $(this).addClass('option-active')
    })
    function askQuestion(questionNo){
        let msgWrapper = $('.dialog-question>.dialog-msg-wrapper')
        let question = questions[questionNo]
        let opts = options[questionNo]
        let HTMLquestion = '<p id="question-' + questionNo + '" class="dialog-msg msg-question">' + question + '</p>\n'
        let HTMLoptions = '<div class="msg-option" data-question-target="question-' + questionNo + '"> </div>\n'
        let optionWrapper = $(HTMLoptions)
        for (let i = 0; i < opts.length; i ++){
            optionWrapper.append('<p class="option" data-opt-no="' + i + '">' + opts[i] + '</p>')
        }
        msgWrapper.append(HTMLquestion)
        msgWrapper.append(optionWrapper)
    }

    let firstQuestion = true
    function addonEnquiry(enquiryMsg){
        let principleNo = Math.floor(Math.random() * principles.length)
        if (firstQuestion){
            principleNo = 7
            firstQuestion = false
        }
        let addOn = '<a class="addon" data-bs-toggle="tooltip" data-bs-placement="top" title="Question Bank ID:' + principleIds[principleNo].toUpperCase() + '"> What are the responsible AI risks in terms of <span class="addon-principle">' + principles[principleNo] + '</span> principle? '
        if (principleNo === 7){
            addOn += principleQuestion[principleNo] + '?</span>'
        }
        else{
            addOn += "How to " + principleQuestion[principleNo] + '?</span>'
        }
        return enquiryMsg + addOn
    }
    function addonAnswer(answerMsg){
        let addOnAnswerMsg = answerMsg.substring(2).replaceAll('\n', '<br>')
        console.log(answerMsg)
        for (let i = 0; i < raiKeywords.length; i++){
            if (addOnAnswerMsg.includes(raiKeywords[i])){
                addOnAnswerMsg = addOnAnswerMsg.replaceAll(raiKeywords[i],'<a class="addon-link" href="' + raiLinks[i] + '">' + raiKeywords[i] + '</a>')
            }
        }
        return addOnAnswerMsg
    }
})