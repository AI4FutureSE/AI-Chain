$(document).ready(()=>{
    $('#promptmanship').attr('href', null)

    addSideNavBar()
    function addSideNavBar(){
        let nav = '<nav class="doc-nav">\n' +
            '        <ul class="doc-list">\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="ai20" href="ai20software30.html">AI 2.0 and Software 3.0</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="se4aichain" href="se4aichain.html">SE for AI Chain: Vision & Goals</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="promptmanship" href="promptmanship.html">Promptmanship</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="rapidpro" href="rapidprototypingprocess.html">Rapid Prototype Process</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainconcepts" href="aichainconcepts.html">AI Chain Concepts</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="activities" href="activitiessummary.html">Activities</a>\n' +
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
            '                                <a class="doc-link doc-link-level3" id="aichainimplement" href="aichainimplementation.html">AI Chain Implementation</a>\n' +
            '                                <!-- 4th level -->\n' +
            '                                <ul class="doc-list">\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="worker" href="workerstereotypes.html">Worker Stereotype</a>\n' +
            '                                    </li>\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4 doc-link-active" id="promptcaveats" href="promptpatterns.html">Prompting Patterns</a>\n' +
             '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichaintesting" href="aichaintesting.html">AI Chain Testing</a>\n' +
            '                            </li>\n' +
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
            '                <a class="doc-link doc-link-level1" id="market" href="showcases/showcases.html">AI Chain Showcases</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="wenxiaojie" href="showcases/wenxiaojie.html">文小杰 (Wen Xiao Jie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="qingxiaoxie" href="showcases/qingxiaoxie.html">轻小写 (Qing Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="chunxiaoxie" href="showcases/chunxiaoxie.html">纯小写 (Chun Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="sixiaopin" href="showcases/sixiaopin.html">思小聘 (Si Xiao Pin)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="xinxiaozhu" href="showcases/xinxiaozhu.html">心小助 (Xin Xiao Zhu)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="huixiaoshi" href="showcases/huixiaoshi.html">绘小诗 (Hui Xiao Shi)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="yunxiaojuan" href="showcases/yunxiaojuan.html">云小卷 (Yun Xiao Juan)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="maxiaoyuan" href="showcases/maxiaoyuan.html">码小猿 (Ma Xiao Yuan)</a>\n' +
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