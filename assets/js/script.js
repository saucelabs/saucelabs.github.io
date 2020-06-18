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

    window.onload = function () {
        const parallaxBox = document.getElementById('parallax')

        /*
         * Fix js error, occurred at pages other than the home page.
         * When there're no parallax, just ignore the below
         * other operations, as below elements are bingding to the parallax.
         */
        if (!parallaxBox) {
            return
        }

        const c2left = document.getElementById('l2').offsetLeft
        const c2top = document.getElementById('l2').offsetTop
        const c3left = document.getElementById('l3').offsetLeft
        const c3top = document.getElementById('l3').offsetTop
        const c4left = document.getElementById('l4').offsetLeft
        const c4top = document.getElementById('l4').offsetTop
        const c5left = document.getElementById('l5').offsetLeft
        const c5top = document.getElementById('l5').offsetTop
        const c6left = document.getElementById('l6').offsetLeft
        const c6top = document.getElementById('l6').offsetTop
        const c7left = document.getElementById('l7').offsetLeft
        const c7top = document.getElementById('l7').offsetTop
        const c8left = document.getElementById('l8').offsetLeft
        const c8top = document.getElementById('l8').offsetTop

        parallaxBox.onmousemove = function (event) {
            event = event || window.event
            const x = event.clientX - parallaxBox.offsetLeft
            const y = event.clientY - parallaxBox.offsetTop

            mouseParallax('l2', c2left, c2top, x, y, 25)
            mouseParallax('l3', c3left, c3top, x, y, 20)
            mouseParallax('l4', c4left, c4top, x, y, 35)
            mouseParallax('l5', c5left, c5top, x, y, 30)
            mouseParallax('l6', c6left, c6top, x, y, 45)
            mouseParallax('l7', c7left, c7top, x, y, 30)
            mouseParallax('l8', c8left, c8top, x, y, 25)
        }
    }

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        const obj = document.getElementById(id)
        const parentObj = obj.parentNode
        const containerWidth = parseInt(parentObj.offsetWidth)
        const containerHeight = parseInt(parentObj.offsetHeight)
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px'
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px'
    }

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
