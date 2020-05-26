jQuery(document).ready(function ($) {
    $('.email-link').on('click', function () {
        gtag('event', 'click/touch', {
            'event_category': 'contact',
            'event_label': 'email'
        });
    })

    $('.contact-linkedin a').on('click', function () {
        gtag('event', 'click/touch', {
            'event_category': 'social',
            'event_label': 'linkedin'
        });
    })

    $('.contact-dribbble a').on('click', function () {
        gtag('event', 'click/touch', {
            'event_category': 'social',
            'event_label': 'dribbble'
        });
    })

    $('.contact-github a').on('click', function () {
        gtag('event', 'click/touch', {
            'event_category': 'social',
            'event_label': 'github'
        });
    })
})
