$(document).ready(()=>{

    // change the navbar on scroll
    $(window).scroll(function (){
        let nav = $('.my-navbar')
        let cover = $('#cover')
        let navLink = $('.nav-link')
        // start scroll
        if (cover.offset().top - $(document).scrollTop() <= -100){
            nav.css({'width': '100%', 'height':'80px', 'position':'fixed', 'background':'white'})
            navLink.css({'color':'var(--first)', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'whitesmoke'})
            }).mouseout(function (){
                $(this).css({'color':'var(--first)'})
            });

            if (cover.offset().top - $(document).scrollTop() <= -400){
                $('.main-page-nav').show()
            }
            else{
                $('.main-page-nav').hide()
            }
        }
        // back to the top
        else{
            nav.css({'width': '750px', 'height':'65px', 'position':'', 'background':''})
            navLink.css({'color':'whitesmoke', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'whitesmoke'})
            }).mouseout(function (){
                $(this).css({'color':'whitesmoke'})
            });
        }
    })

    // click card to redirect
    // $('.module-card').click(function (){
    //     window.location.href = 'content.html'
    // })

    $('.contact-btn').click(function (){
        let contact = $('#contact-detail')
        contact.text($(this).attr('data-contact-id'))
        contact.slideDown()
    })
})