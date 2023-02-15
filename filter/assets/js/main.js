jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //  Toggle Menu for Mobile
    // -------------------------------------------------------------

    mobileDropdown ();
    function mobileDropdown () {
      if($('.navbar-nav').length) {
        $('.navbar-nav .tl-dropdown').append(function () {
          return '<i class="fa fa-angle-down icon" aria-hidden="true"></i>';
        });
        $('.navbar-nav .tl-dropdown .icon').on('click', function () {
          $(this).parent('li, .tl-dropdown').children('ul, .tl-dropdown-menu').slideToggle();
        });
      }
    }

    // -------------------------------------------------------------
    // Search
    // -------------------------------------------------------------

    $('.search-icon').on("click", function(event){
        $('.open-search').css('height', '100vh');
        return false;
    });
    $('.close-search').on("click",function(event){
        $('.open-search').css('height', '0');
        return false;
    });

    // -------------------------------------------------------------
    //  Jquery Ui priceRange
    // -------------------------------------------------------------

    $( "#price_slider" ).slider({
    range: true,
    min: 0,
    max: 12980952,
    values: [ 0, 12980952 ],
    slide: function( event, ui ) {
    $( "#amount" ).val( "Rs." + ui.values[ 0 ] + " - Rs." + ui.values[ 1 ] );
    }
    });
    $( "#amount" ).val( "Rs." + $( "#price_slider" ).slider( "values", 0 ) +
    " - Rs." + $( "#price_slider" ).slider( "values", 1 ) );

    //area_slider
    
    $( "#area_slider" ).slider({
        range: true,
        min: 0,
        max: 12980952,
        values: [ 0, 12980952 ],
        slide: function( event, ui ) {
        $( "#area_amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#area_amount" ).val( "$" + $( "#area_slider" ).slider( "values", 0 ) +
    " - $" + $( "#area_slider" ).slider( "values", 1 ) );

    // -------------------------------------------------------------
    // CounterUp
    // -------------------------------------------------------------

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });    

    // -------------------------------------------------------------
    //  Slick Slider
    // ------------------------------------------------------------- 

    $(".featured-slider").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    });

    $(".property-slider").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $(".blog-slider").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ] 
    }); 

    $(".brand-slider").slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $(".hot-flat-slider").slick({
        infinite: true,
        dots: true,
        arrows: false,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 10000,
        slidesToScroll: 1
    });

    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.testimonial-nav-slider'
    });
    
    $('.testimonial-nav-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
          }
        }
        ]        
    }); 

    $(".team-slider").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ] 
    });

    $('.property-details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        asNavFor: '.details-slider-nav'
    });
    
    $('.details-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.property-details-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          }
        }
        ]        
    });       

    $(".branch-officer-slider").slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    });

    $(".project-slider").slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        responsive: [
        {
          breakpoint: 1665,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1375,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
        ] 
    });            

    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    $('.lt-video a').magnificPopup({type:'iframe'});

    $('.lt-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });   

    // -------------------------------------------------------------
    //  tab view change
    // -------------------------------------------------------------

     $('.lt-filter-form .list-view-tab').on('click', function() {
        $('.lt-filter-form .list-view-tab').addClass('active');
        $('.lt-filter-form .grid-view-tab').removeClass('active');
        $('.lt-filter-form').removeClass('grid-view-tab').addClass('list-view-tab');
    });    
  
    $('.lt-filter-form .grid-view-tab').on('click', function() {
        $('.lt-filter-form .grid-view-tab').addClass('active');
        $('.lt-filter-form .list-view-tab').removeClass('active');
        $('.lt-filter-form').removeClass('list-view-tab').addClass('grid-view-tab');
    });

    // -------------------------------------------------------------
    //  Smooth scrolling
    // -------------------------------------------------------------    

    $('.mouse-icon').on('click', function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 700);
        return false;
    });

    /*==============================================================*/
    // Slider Animationend
    /*==============================================================*/

    function doAnimations( elems ) {
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    var $myCarousel = $('#home-slider, #property-carousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    $myCarousel.carousel();
    
    doAnimations($firstAnimatingElems);
    
    $myCarousel.carousel('pause');

    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });  

    /*==============================================================*/
    // niceSelect
    /*==============================================================*/

    $('select').niceSelect();

    /*==============================================================*/
    // TheiaStickySidebar
    /*==============================================================*/

    $('.lt-sticky')
        .theiaStickySidebar({
            additionalMarginTop: 0
    });

    /*==============================================================*/
    // scrollTop
    /*==============================================================*/

    var ltTop = $('.menu-sticky').offset().top;

    $(window).scroll(function() {
        var window_top = $(window).scrollTop() - 0;
        if (window_top > ltTop) {
            if (!$('.menu-sticky').is('.fixed-top animated fadeInDown')) {
                $('.menu-sticky').addClass('fixed-top animated fadeInDown');
            }
        } else {
            $('.menu-sticky').removeClass('fixed-top animated fadeInDown');
        }
    });

    /*==============================================================*/
    // Scroll Up
    /*==============================================================*/

    $("body").append(' <a id="scrollUp" class="show"></a> ');

    var btn = $('#scrollUp');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
  


//jQuery End
});

