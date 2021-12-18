const $ = window.$;
// Preloader js
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

// Switching logos, bg & link colors for home and content pages
$(document).ready(function () {
  const basePath = window.location.pathname.split('/')[1];
  const navigation = $('.navigation');
  const homePageLogo = $('#home-page-logo');
  const contentPageLogo = $('#content-page-logo');
  const navbar = $('.navbar');
  if (basePath.length > 0) {
    homePageLogo.remove();
    contentPageLogo.removeClass('invisible');
    navigation.removeClass('home-page');
    navigation.addClass('content-page');
    navbar.removeClass('home-page');
    navbar.addClass('content-page');
  } else {
    homePageLogo.removeClass('invisible');
    contentPageLogo.remove();
  }
});

(function ($) {
  'use strict';

  // Sticky Menu
  const NAVIGATION_MENU_TRESHOLD = 100;
  const navigation = $('.navigation');
  $(window).scroll(function () {
    if (navigation.offset().top > NAVIGATION_MENU_TRESHOLD) {
      navigation.addClass('nav-bg');
    } else {
      navigation.removeClass('nav-bg');
    }
  });

  $('.navbar-toggler').click(() => {
    if (navigation.offset().top <= NAVIGATION_MENU_TRESHOLD) {
      navigation.toggleClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')',
    });
  });

  // background color
  $('[data-color]').each(function () {
    $(this).css({
      'background-color': $(this).data('color'),
    });
  });

  // progress bar
  $('[data-progress]').each(function () {
    $(this).css({
      bottom: $(this).data('progress'),
    });
  });

  window.onload = function () {
    const parallaxBox = document.getElementById('parallax');

    /*
     * Fix js error, occurred at pages other than the home page.
     * When there're no parallax, just ignore the below
     * other operations, as below elements are binding to the parallax.
     */
    if (!parallaxBox) {
      return;
    }

    const l1 = document.getElementById('l1');
    const l2 = document.getElementById('l2');
    const l3 = document.getElementById('l3');
    const l4 = document.getElementById('l4');
    const l5 = document.getElementById('l5');
    const l6 = document.getElementById('l6');
    const l7 = document.getElementById('l7');
    const l8 = document.getElementById('l8');

    let c1left,
      c1top,
      c2left,
      c2top,
      c3left,
      c3top,
      c4left,
      c4top,
      c5left,
      c5top,
      c6left,
      c6top,
      c7left,
      c7top,
      c8left,
      c8top;

    function setElementPosition() {
      c1left = l1.offsetLeft;
      c1top = l1.offsetTop;
      c2left = l2.offsetLeft;
      c2top = l2.offsetTop;
      c3left = l3.offsetLeft;
      c3top = l3.offsetTop;
      c4left = l4.offsetLeft;
      c4top = l4.offsetTop;
      c5left = l5.offsetLeft;
      c5top = l5.offsetTop;
      c6left = l6.offsetLeft;
      c6top = l6.offsetTop;
      c7left = l7.offsetLeft;
      c7top = l7.offsetTop;
      c8left = l8.offsetLeft;
      c8top = l8.offsetTop;
    }

    function clearElementPosition() {
      l1.removeAttribute('style');
      l2.removeAttribute('style');
      l3.removeAttribute('style');
      l4.removeAttribute('style');
      l5.removeAttribute('style');
      l6.removeAttribute('style');
      l7.removeAttribute('style');
      l8.removeAttribute('style');
    }

    function moveElements(event) {
      event = event || window.event;
      const x = event.clientX - parallaxBox.offsetLeft;
      const y = event.clientY - parallaxBox.offsetTop;
      mouseParallax(l1, c1left, c1top, x, y, 5);
      mouseParallax(l2, c2left, c2top, x, y, 10);
      mouseParallax(l3, c3left, c3top, x, y, 10);
      mouseParallax(l4, c4left, c4top, x, y, 10);
      mouseParallax(l5, c5left, c5top, x, y, 10);
      mouseParallax(l6, c6left, c6top, x, y, 10);
      mouseParallax(l7, c7left, c7top, x, y, 10);
      mouseParallax(l8, c8left, c8top, x, y, 10);
    }

    setElementPosition();

    window.onresize = function () {
      clearElementPosition();
      setElementPosition();
      moveElements();
    };

    parallaxBox.onmousemove = moveElements;
  };

  function mouseParallax(obj, left, top, mouseX, mouseY, speed) {
    const parentObj = obj.parentNode;
    const containerWidth = parseInt(parentObj.offsetWidth);
    const containerHeight = parseInt(parentObj.offsetHeight);
    obj.style.left =
      left -
      ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
        speed +
      'px';
    obj.style.top =
      top -
      ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
        speed +
      'px';
  }

  // testimonial-slider
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1,
    });

    window.jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }
})(window.jQuery);
