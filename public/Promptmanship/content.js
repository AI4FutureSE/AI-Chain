$(document).ready(()=>{
    $('#promptmanship').attr('href', null)
    $('head').append('    <!-- Google tag (gtag.js) -->\n' +
        '    <script async src="httpss://www.googletagmanager.com/gtag/js?id=G-WDT7R908VP"></script>\n' +
        '    <script>\n' +
        '        window.dataLayer = window.dataLayer || [];\n' +
        '        function gtag(){dataLayer.push(arguments);}\n' +
        '        gtag(\'js\', new Date());\n' +
        '\n' +
        '        gtag(\'config\', \'G-WDT7R908VP\');\n' +
        '    </script>' +
        '<link rel="icon" type="image/x-icon" href="https://' + location.host + '/public/image/graphics/favicon.ico">')

    // addTopNavBar()
    function addTopNavBar(){
        let topNav = $('.my-navbar')
        topNav.html('<nav class="navbar navbar-expand-lg navbar-light my-navbar">\n' +
            '    <a class="navbar-brand" href="https://' + location.host + '/public/index.html"><img class="brand-logo" src="https://' + location.host + '/public/image/graphics/logo-blue.png"></a>\n' +
            '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">\n' +
            '        <span class="navbar-toggler-icon"></span>\n' +
            '    </button>\n' +
            '    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">\n' +
            '        <ul class="navbar-nav">\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://www.aichain.store/"><i class="bi bi-shop-window"></i>Marketplace</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://' + location.host + '/public/content%20pages/ai20software30.html"><i class="bi bi-card-list"></i>Documentation</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item">\n' +
            '                <a class="nav-link" href="https://www.promptsapper.tech/"><i class="bi bi-motherboard"></i>Sapper IDE</a>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </div>\n' +
            '</nav>')
    }

    addSideNavBar()
    function addSideNavBar(){
        let docNav =
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="promptmanship" href="https://' + location.host + '/public/Promptmanship/promptmanship.html">Promptmanship</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="rapidpro" href="https://' + location.host + '/public/Promptmanship/rapidprototypingprocess.html">Rapid Prototype Process</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainconcepts" href="https://' + location.host + '/public/Promptmanship/aichainconcepts.html">AI Chain Concepts</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="activities" href="https://' + location.host + '/public/Promptmanship/activitiessummary.html">Activities</a>\n' +
            '                        <!-- 3rd level -->\n' +
            '                        <ul class="doc-list">\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="magic" href="https://' + location.host + '/public/Promptmanship/magicenhancingmagic.html">Magic Enhancing Magic</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="taskmodeling" href="https://' + location.host + '/public/Promptmanship/taskmodeling.html">Task Modelling</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="systemdesign" href="https://' + location.host + '/public/Promptmanship/systemdesign.html">System Design</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichainimplement" href="https://' + location.host + '/public/Promptmanship/aichainimplementation.html">AI Chain Implementation</a>\n' +
            '                                <!-- 4th level -->\n' +
            '                                <ul class="doc-list">\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="worker" href="https://' + location.host + '/public/Promptmanship/workerstereotypes.html">Worker Stereotype</a>\n' +
            '                                    </li>\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="promptpattern" href="https://' + location.host + '/public/Promptmanship/promptpatterns.html">Prompting Patterns</a>\n' +
             '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichaintesting" href="https://' + location.host + '/public/Promptmanship/aichaintesting.html">AI Chain Testing</a>\n' +
            '                            </li>\n' +
           '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </li>\n' +
            '                        </ul>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </nav>'

        $('main').prepend(docNav)
        highlightCurrentLink()
    }

    function highlightCurrentLink(){
        let pageNavID = $('#page-nav-id').text()
        $('.doc-link-active').removeClass('doc-link-active')
        $('#' + pageNavID).addClass('doc-link-active')
    }

    $('#main-content').scroll(function (){
        if ($('#main-content').scrollTop() > 800){
            $('.btn-wrap-fixed').slideDown()
        }
        else {
            $('.btn-wrap-fixed').slideUp()
        }
    })
})
