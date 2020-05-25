jQuery(document).ready(function ($) {

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function removeHover() {
        if ($('#spacer').isInViewport()) {
            jQuery('.main-nav--landing').removeClass('hover-underline');
        } else {
            jQuery('.main-nav--landing').addClass('hover-underline');
        }
    };
    removeHover();

    function showNav() {
        jQuery('.main-nav--list').css('visibility', 'visible').css('opacity', '1');
    }

    function highlightNav() {
        let screenPosition = $(document).scrollTop();

        $('.frontpage-section:not(#landing)').each(function () {
            var sectionID = $(this).attr('id');
            var section = $('#' + $(this).attr('id'));
            if ($(section).isInViewport()) {
                $('#main-nav--' + sectionID).addClass('selected');
            } else {
                $('#main-nav--' + sectionID).removeClass('selected');
            }

            if ($('#portfolio').isInViewport()) {
                $('#main-nav--about').removeClass('selected');
            }

            if ($('#contact').isInViewport()) {
                $('#main-nav--portfolio').removeClass('selected');
            }

        });
    };


    function scrollPageTo(myTarget, topPadding) {
        if (topPadding == undefined) {
            topPadding = 0;
        }
        var moveTo = $(myTarget).offset().top - topPadding;
        $('html, body').stop().animate({
            scrollTop: moveTo
        }, 'slow');
    }

    function navClick() {
        $('.main-nav--item:not(".main-nav--landing")').each(function () {
            var scrollToData = $(this).attr('data-scroll-to');
            $(this).on('click', function () {
                scrollPageTo('#' + scrollToData, 0);
            })
        })

        $('.main-nav--landing').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        })
    }

    function mobileMenu() {
        $('.mobile-nav--btn').on('click', function () {
            $('.main-nav--list').toggleClass('active');
        });
    }



    $(window).scroll(function () {
        showNav();
        highlightNav();
        removeHover()
    });

    highlightNav();
    navClick();
    mobileMenu()

})
