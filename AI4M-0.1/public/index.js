$(document).ready(()=>{
    // *** Left-bar ***
    let userType = 'Enquirer'
    // Slide user type while hovering
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
    $(document).on('click', '.user-icon-nonselect', function (){
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
    })
    // new conversation
    $('#conversation-new').click(function (){
        archiveConversation()
        $('.conversation-wrapper').remove()
        let convID = Date.now()
        let convWrapperHTML = '<div id="conv-' + convID + '" class="conversation-wrapper"></div>'
        $('#middle-page').append(convWrapperHTML)
    })
    // tool tips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // archive conversation
    function archiveConversation(){
        let convID = $('.conversation-wrapper').attr('id')
        // save to backend
        $.ajax({
            url: '/saveConv',
            type: 'post',
            data: {
                'id': convID,
                'user': userType,
                'conversation': JSON.stringify(extractConversationText())
            },
            success: function (res){
                // if no associated card for the conversation add a new card
                if ($('.conversation-card[data-conv-target="' + convID +'"]').length === 0){
                    // if successfully add card, show the right side bar
                    addConvCard()
                }
                showRightBar()
            },
            error: function (res){
                alert('Error')
                console.log(res)
            }
        })
    }
    $('#conversation-archive').click(function (){
        archiveConversation()
    })


    // *** Right-bar ***
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
    $('.card-remove').click(function (){
        $(this).parents().closest('.conversation-card').remove()
        console.log($(this).parents().closest('.conversation-card'))
    })
    function addConvCard(){
        // add conversation card in the right-side bar
        let conversation = extractConversationText()
        if (conversation.length === 0) return false
        $('#right-sidebar').append(generateConvCard(conversation, $('.conversation-wrapper').attr('id')))
        $('.card-remove').click(function (){
            $(this).parents().closest('.conversation-card').remove()
        })
        clickCardFetchConv()
        return true
    }
    // click the conv card to fetch the conversation
    clickCardFetchConv()
    function clickCardFetchConv(){
        $('.conversation-card').click(function (){
            $.ajax({
                url: '/readConv',
                type: 'post',
                data: {
                    'id': $('.conversation-wrapper').attr('id'),
                    'user': userType,
                    'conversation': JSON.stringify(extractConversationText())
                },
                success: function (res){
                    // res: {conversation:[{user:, message:[]}], id:, user:}
                    generateConversationWrap(res)
                },
                error: function (res){
                    alert('Error')
                    console.log(res)
                }
            })
        })
    }


    // *** conversation transmission ***
    // input message
    $('#msgForm').submit(function (e){
        // * display the input message in the conversation wrapper
        let currentDialog = $('.conversation-dialog').last()
        let convWrapper = $('.conversation-wrapper')
        let msgInput = $('#msgInput')
        // if send from the same user, append message in current dialog
        if (currentDialog.attr('data-role') === userType){
            currentDialog.find('.dialog-msg-wrapper').append(generateMessage(msgInput.val()))
        }
        // else create a new dialog
        else{
            convWrapper.append(generateDialog(userType, msgInput.val()))
        }
        convWrapper.animate({
            scrollTop: convWrapper.prop('scrollHeight')
        }, 500)
        // wait for response
        let message = msgInput.val()
        msgInput.val('')
        msgInput.attr('disabled','disabled')


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
                    $('.conversation-wrapper').append(generateDialog('Expertise', res.answer))
                    convWrapper.animate({
                        scrollTop: convWrapper.prop('scrollHeight')
                    }, 500)
                    msgInput.removeAttr('disabled')
                }
            },
            error: function (res){
                alert('Error')
                console.log(res)
                msgInput.removeAttr('disabled')
            }
        })
    })

    // export conversation
    function extractConversationText(){
        let convWrapper = $('.conversation-wrapper')
        let conversation = []  // [{'user':, 'message':[]}]
        for (let i = 0; i < convWrapper.children().length; i++){
            let dialogWrapper = $(convWrapper.children()[i])
            let messageWrapper = dialogWrapper.find('.dialog-msg')
            let dialog = {'user': dialogWrapper.attr('data-role'), 'message':[]}
            for (let j = 0; j < messageWrapper.length; j ++){
                dialog.message.push($(messageWrapper[j]).text())
            }
            conversation.push(dialog)
        }
        return conversation
    }
    $('#conversation-export').click(function (){
        // write down into json file and download
        $.ajax({
            url: '/saveConv',
            type: 'post',
            data: {
                'id': $('.conversation-wrapper').attr('id'),
                'user': userType,
                'conversation': JSON.stringify(extractConversationText())
            },
            success: function (res){
                // download json file
                let filePath = res.jsonFile.replace(/\\/g, '/')
                filePath = filePath.substr(filePath.lastIndexOf('/') + 1)
                let link=document.createElement('a');
                console.log(filePath)
                link.href = filePath
                link.download = filePath
                link.click()
            },
            error: function (res){
                alert('Error')
                console.log(res)
            }
        })
    })

    // import conversation Json
    function loadConvInWrapper(conversation){
        // @conversation: [{'user':, 'message':[]}]
        // load the dialogs to the page
        let convWrapper = $('.conversation-wrapper')
        convWrapper.empty()
        for (let i = 0; i < conversation.length; i++){
            let dialog = conversation[i]
            console.log(dialog)
            convWrapper.append(generateDialog(dialog.user, dialog.message[0]))
            for (let j = 1; j < dialog.message.length; j ++){
                $('.dialog-msg-wrapper').last().append(generateMessage(dialog.message[j]))
            }
        }
    }
    $('#importInput').change(function (event){
        alert('Import successfully')
        let reader = new FileReader()
        reader.onload = function (e){
            // read the uploaded file
            let conversation = JSON.parse(JSON.parse(e.target.result).conversation)  //[{'user':, 'message':[]}]
            loadConvInWrapper(conversation)
        }
        reader.readAsText(event.target.files[0])
        $(this).val('')
    })


    // *** Dialog rendering ***
    // middle page
    function generateMessage(msg){
        return '<p class="dialog-msg">'+ msg +"</p>"
    }
    function generateDialog(user, msg){
        return "<div class=\"conversation-dialog dialog-" + user.toLowerCase() + "\" data-role=\"" + user + "\">\n" +
            "    <div class=\"dialog-portrait\">\n" +
            "        <img src=\"images/" + user.toLowerCase() + ".jpg\" class=\"dialog-portrait-img\">\n" +
            "        <p class=\"dialog-portrait-name\">" + user + "</p>\n" +
            "    </div>\n" +
            "    <div class=\"dialog-msg-wrapper\">\n" +
            "        <p class=\"dialog-msg\">" + msg + "</p>\n" +
            "    </div>\n" +
            "</div>"
    }
    function generateConversationWrap(convInfo){
        //@convInfo: {conversation:[{user:, message:[]}], id:, user:}
        let convWrapperHTML = '<div id="' + convInfo.id + '" class="conversation-wrapper"></div>'
        $('.conversation-wrapper').remove()
        $('#middle-page').append(convWrapperHTML)
        console.log(convInfo)
        loadConvInWrapper(JSON.parse(convInfo.conversation))
    }
    // right-side bar
    function generateConvCard(conversation, convID){
        //@conversation: [{user:, message:[]}]
        console.log(conversation)
        let title = conversation[0].message
        let user = conversation[0].user
        let content = conversation[0].message
        if (conversation.length > 1) content = conversation[1].message
        return '<div class="conversation-card" data-conv-target="' + convID + '">\n' +
            '    <div class="go-corner">\n' +
            '        <div class="card-remove">\n' +
            '            x\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <p class="con-card-title">' + title + '</p>\n' +
            '    <p class="con-card-subtitle">' + user + '</p>\n' +
            '    <p class="con-card-content">' + content + '</p>\n' +
            '</div>'
    }


    // ***********
    // Chatbot
    // ***********
    const questions = ["What is your role on the AI4M project?",
        "Which industry sector is your AI4M project targeted at?",
        "Which business areas does your AI4M project target?",
        "What types of AI system are you developing?"]

    const options = [["Lead", "Technician", "Consultant", "Client"],
        ["Health", "Mining", "Mining", "Law", "Finance", "Agribusiness", "Cyber Security", "Education", "Defence", "Infrastructure", "Manufacturing", "R&D or Innovation", "Environment"],
        ["Accounting and finance", "Customer service", "Human resources", "IT", "Legal, risk and compliance", "Supply chain", "Marketing", "Research and development", "Sales", "Strategy", "Other"],
        ["Recognition systems", "Language processing", "Automated decision making", "Recommender systems", "Computer vision", "Other"]]

    optionClick()
    askQuestion(0)
    function optionClick(){
        $('.option').click(function (){
            let questionTarget = $(this).parents().closest('.dialog-option').attr('data-question-target')
            let questionNo = parseInt(questionTarget.substr(questionTarget.lastIndexOf('-') + 1))
            // remove all shown later questions
            for (let i = questionNo + 1; i < questions.length; i++){
                $('#question-' + i).remove()
                $('[data-question-target=question-' + i + ']').remove()
            }
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
    }
    function askQuestion(questionNo){
        let questionWrapper = $('.dialog-question')
        let msgWrapper = questionWrapper.find('.dialog-msg-wrapper')
        let question = questions[questionNo]
        let opts = options[questionNo]
        let HTMLquestion = '<p id="question-' + questionNo + '" class="dialog-msg">' + question + '</p>\n'
        let HTMLoptions = '<div class="dialog-option" data-question-target="question-' + questionNo + '"> </div>\n'
        let optionWrapper = $(HTMLoptions)
        for (let i = 0; i < opts.length; i ++){
            optionWrapper.append('<p class="option">' + opts[i] + '</p>')
        }
        msgWrapper.append(HTMLquestion)
        msgWrapper.append(optionWrapper)
        optionClick()
    }
})