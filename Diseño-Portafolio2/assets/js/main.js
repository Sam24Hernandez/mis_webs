$(document).ready(function() {
    'use strict'; // Modo estricto

    // Preloader
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 71)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
    });

    // ScrollUp
    $('#back-top a').on('click', function() {
        $('body, html').animate(
            {
                scrollTop: 0,                
            },
            800
        );
        console.log($('#back-top a'))
        return false;
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($('#mainNav').offset().top > 100) {
            $('#mainNav').addClass('navbar-shrink');
        } else {
            $('#mainNav').removeClass('navbar-shrink');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();

    // Collapse now if the navbar when the page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label heading for the contact form
    $(function() {
        $('body').on('input propertychange', '.floating-label-form-group', function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on('focus', '.floating-label-form-group', function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on('blur', '.floating-label-form-group', function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
});