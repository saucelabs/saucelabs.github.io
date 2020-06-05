const $ = window.$
// Preloader js    
$(window).on('load', function () {
    $('.preloader').fadeOut(100)
})

// Switching logos, bg & link colors for home and content pages
$(document).ready(function () {
    const basePath = window.location.pathname.split('/')[1]
    const navigation = $('.navigation')
    const homePageLogo = $('#home-page-logo')
    const contentPageLogo = $('#content-page-logo')    
    const navbar = $('.navbar')
    if (basePath.length > 0) {
        homePageLogo.remove()
        contentPageLogo.removeClass('invisible')        
        navigation.removeClass('home-page')
        navigation.addClass('content-page')
        navbar.removeClass('home-page')
        navbar.addClass('content-page')
    } else {
        homePageLogo.removeClass('invisible')
        contentPageLogo.remove()
    }
});

(function ($) {
    'use strict'

    // Sticky Menu
    const navigation = $('.navigation')
    $(window).scroll(function () {
        if (navigation.offset().top > 100) {
            navigation.addClass('nav-bg')
        } else {
            navigation.removeClass('nav-bg')
        }
    })

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        })
    })

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        })
    })

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        })
    })


    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    })


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    })

    // Shuffle js filter and masonry
    var containerEl = document.querySelector('.shuffle-wrapper')
    if (containerEl) {
        var Shuffle = window.Shuffle
        var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
            itemSelector: '.shuffle-item',
            buffer: 1
        })

        window.jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
            var input = evt.currentTarget
            if (input.checked) {
                myShuffle.filter(input.value)
            }
        })
    }



})(window.jQuery)