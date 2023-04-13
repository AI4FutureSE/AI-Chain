$(document).ready(()=>{

    // change the navbar on scroll
    $(window).scroll(function (){
        let nav = $('.my-navbar')
        let cover = $('#cover')
        let navLink = $('.nav-link')
        // start scroll
        if (cover.offset().top - $(document).scrollTop() <= -100){
            nav.css({'height':'80px', 'position':'fixed', 'background':'white'})
            navLink.css({'color':'var(--first)', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'navajowhite'})
            }).mouseout(function (){
                $(this).css({'color':'var(--first)'})
            });
        }
        // back to the top
        else{
            nav.css({'height':'65px', 'position':'absolute', 'background':''})
            navLink.css({'color':'whitesmoke', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'navajowhite'})
            }).mouseout(function (){
                $(this).css({'color':'whitesmoke'})
            });
        }
    })

    // click card to redirect
    $('.module-card').click(function (){
        window.location.href = 'content.html'
    })
})