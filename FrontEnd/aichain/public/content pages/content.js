$(document).ready(()=>{
    $('#promptmanship').attr('href', null)

    addSideNavBar()
    function addSideNavBar(){
        let nav = '<nav class="doc-nav">\n' +
            '        <ul class="doc-list">\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="ai20" href="http://' + location.host + '/public/content pages/ai20software30.html">AI 2.0 and Software 3.0</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="se4aichain" href="http://' + location.host + '/public/content pages/se4aichain.html">SE for AI Chain: Vision & Goals</a>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="promptmanship" href="http://' + location.host + '/public/content pages/promptmanship.html">Promptmanship</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="rapidpro" href="http://' + location.host + '/public/content pages/rapidprototypingprocess.html">Rapid Prototype Process</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="aichainconcepts" href="http://' + location.host + '/public/content pages/aichainconcepts.html">AI Chain Concepts</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="activities" href="http://' + location.host + '/public/content pages/activitiessummary.html">Activities</a>\n' +
            '                        <!-- 3rd level -->\n' +
            '                        <ul class="doc-list">\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="magic" href="http://' + location.host + '/public/content pages/magicenhancingmagic.html">Magic Enhancing Magic</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="taskmodeling" href="http://' + location.host + '/public/content pages/taskmodeling.html">Task Modelling</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="systemdesign" href="http://' + location.host + '/public/content pages/systemdesign.html">System Design</a>\n' +
            '                            </li>\n' +
            '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichainimplement" href="http://' + location.host + '/public/content pages/aichainimplementation.html">AI Chain Implementation</a>\n' +
            '                                <!-- 4th level -->\n' +
            '                                <ul class="doc-list">\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4" id="worker" href="http://' + location.host + '/public/content pages/workerstereotypes.html">Worker Stereotype</a>\n' +
            '                                    </li>\n' +
            '                                    <li class="doc-item">\n' +
            '                                        <a class="doc-link doc-link-level4 doc-link-active" id="promptcaveats" href="http://' + location.host + '/public/content pages/promptpatterns.html">Prompting Patterns</a>\n' +
             '                            <li class="doc-item">\n' +
            '                                <a class="doc-link doc-link-level3" id="aichaintesting" href="http://' + location.host + '/public/content pages/aichaintesting.html">AI Chain Testing</a>\n' +
            '                            </li>\n' +
           '                                    </li>\n' +
            '                                </ul>\n' +
            '                            </li>\n' +
            '                        </ul>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="sapperide" href="http://' + location.host + '/public/content pages/sapperide/ideintro.html">Sapper IDE</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="exploreview" href="http://' + location.host + '/public/content pages/sapperide/explorationview.html">Exploration View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="designview" href="http://' + location.host + '/public/content pages/sapperide/designview.html">Design View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="blockview" href="http://' + location.host + '/public/content pages/sapperide/blockview.html">Block View</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="prompthub" href="http://' + location.host + '/public/content pages/sapperide/prompthub.html">Prompt Hub</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="enginemanagement" href="http://' + location.host + '/public/content pages/sapperide/enginemanagement.html">Engine Management</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="artifacts" href="http://' + location.host + '/public/content pages/sapperide/projectmanagement.html">Project Management</a>\n' +
            '                    </li>\n' +
            '                </ul>\n' +
            '            </li>\n' +
            '            <li class="doc-item">\n' +
            '                <a class="doc-link doc-link-level1" id="market" href="http://' + location.host + '/public/content pages/showcases/showcases.html">AI Chain Showcases</a>\n' +
            '                <!-- 2ed level -->\n' +
            '                <ul class="doc-list">\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="wenxiaojie" href="http://' + location.host + '/public/content pages/showcases/wenxiaojie.html">文小杰 (Wen Xiao Jie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="qingxiaoxie" href="http://' + location.host + '/public/content pages/showcases/qingxiaoxie.html">轻小写 (Qing Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="chunxiaoxie" href="http://' + location.host + '/public/content pages/showcases/chunxiaoxie.html">纯小写 (Chun Xiao Xie)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="sixiaopin" href="http://' + location.host + '/public/content pages/showcases/sixiaopin.html">思小聘 (Si Xiao Pin)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="xinxiaozhu" href="http://' + location.host + '/public/content pages/showcases/xinxiaozhu.html">心小助 (Xin Xiao Zhu)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="huixiaoshi" href="http://' + location.host + '/public/content pages/showcases/huixiaoshi.html">绘小诗 (Hui Xiao Shi)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="yunxiaojuan" href="http://' + location.host + '/public/content pages/showcases/yunxiaojuan.html">云小卷 (Yun Xiao Juan)</a>\n' +
            '                    </li>\n' +
            '                    </li>\n' +
            '                    <li class="doc-item">\n' +
            '                        <a class="doc-link doc-link-level2" id="maxiaoyuan" href="http://' + location.host + '/public/content pages/showcases/maxiaoyuan.html">码小猿 (Ma Xiao Yuan)</a>\n' +
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