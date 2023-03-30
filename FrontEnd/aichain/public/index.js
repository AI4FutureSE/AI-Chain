$(document).ready(()=>{
    $(window).scroll(function (){
        let nav = $('.my-navbar')
        let cover = $('#cover')
        let navLink = $('.nav-link')
        let navItem = $('.nav-item')
        // start scroll
        if (cover.offset().top - $(document).scrollTop() <= -100){
            nav.css({'width': '100%', 'height':'80px', 'position':'fixed', 'background':'white'})
            navLink.css({'color':'var(--first)', 'font-weight':'bold'})
            navLink.mouseover(function() {
                $(this).css({'color':'whitesmoke'})
            }).mouseout(function (){
                $(this).css({'color':'var(--first)'})
            });
        }
        // back to the top
        else{
            nav.css({'width': '700px', 'height':'65px', 'position':'', 'background':''})
            navLink.css({'color':'whitesmoke', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'whitesmoke'})
            }).mouseout(function (){
                $(this).css({'color':'whitesmoke'})
            });
        }
    })
})