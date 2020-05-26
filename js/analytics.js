jQuery(document).ready(function($){
    $('.email-link').on('click', function(){
        gtag('send', 'event', 'contact', 'click/touch', 'email' );
    })

    $('.contact-linkedin a').on('click', function(){
        gtag('send', 'event', 'social', 'click/touch', 'linkedin' );
    })

    $('.contact-dribbble a').on('click', function(){
        gtag('send', 'event', 'social', 'click/touch', 'dribbble' );
    })

    $('.contact-github a').on('click', function(){
        gtag('send', 'event', 'social', 'click/touch', 'github' );
    })
})
