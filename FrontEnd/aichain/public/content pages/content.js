$(document).ready(()=>{
    highlightUnLinkedDoc()
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