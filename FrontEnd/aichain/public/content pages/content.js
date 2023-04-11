$(document).ready(()=>{
    $('#promptmanship').attr('href', null)

    addSideNavBar()
    function addSideNavBar(){
        let nav = '<nav class="doc-nav">\n' +
            '        <ul class="doc-list">\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="ai20" href="ai20software30.html">AI2.0 and Software3.0</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="se4aichain" href="se4aichain.html">SE for AIChain: Vision & Goals</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="promptmanship" href="promptpatterns.html">Promptmanship</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="rapidpro" href="rapidprototypingprocess.html">Rapid Prototype Process</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainconcepts" href="aichainconcepts.html">AI Chain Concepts</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="activities">Activities</a>\n' +
            '                        <!-- 3rd level -->\n' +
            '                        <ul class="doc-list">\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="magic" href="magicenhancingmagic.html">Magic Enhancing Magic</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="taskmodeling" href="taskmodeling.html">Task Modelling</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="systemdesign" href="systemdesign.html">System Design</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichaintesting" href="aichaintesting.html">AI Chain Testing</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichainimplement" href="aichainimplementation.html">AI Chain Implementation</a>\n' +
            '                                <!-- 4th level -->\n' +
            '                                <ul class="doc-list">\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="worker" href="workerstereotypes.html">Worker Stereotype</a>\n' +
            '                                    </li>\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4 doc-link-active" id="promptcaveats" href="promptpatterns.html">Prompting Caveats</a>\n' +
            '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </li>\n' +
            '                        </ul>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="sapperide">Sapper IDE</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="exploreview">Exploration View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="designview">Design View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="blockview">Block View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="prompthub">Prompt Hub</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="enginemanagement">Engine Management</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="artifacts">Artifacts</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="market">AI Chain Marketplace</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="wenxiaojie">WenXiaoJie</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="sixiaopin">SiXiaoPin</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="maxiaoyan">MaXiaoYan</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </nav>'

        $('main').prepend(nav)
        highlightUnLinkedDoc()
    }

    function highlightUnLinkedDoc(){
        let links = $('.doc-link')
        for (let i = 0; i < links.length; i ++){
            let link = $(links[i])
            if (link.attr('href') == null){
                link.css('color', 'var(--second)')
            }
        }
    }
})