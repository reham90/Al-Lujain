$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
      $("#menu-id").click(function(e) {
          e.preventDefault();
          $('.menu-bars .bar').toggleClass('hide-icon');
          $('.menu-bars .times').toggleClass('hide-icon');
          $(".navgition").toggleClass("reset-left");
          $("body").toggleClass("overflow");

      });
      $(".nav-head .close-btn").click(function() {
          $(".navgition").removeClass("reset-left");
          $(".menu-bars .bars").toggleClass("open-bars");
          $(".menu-bars .bars").toggleClass("close-bars");
          $("body").removeClass("overflow");
      });




      //slide down menu
      $(".menu-name").click(function(e) {
          e.preventDefault();
          $(this).siblings(".cats-display-2").slideToggle(400);
          $(".menu-name").not(this).siblings(".cats-display-2").slideUp(400);
          if ($(window).width() <= 991) {
              $(this).toggleClass("active");
              $(".menu-name").not(this).removeClass("active");
          }
      });

  };

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav");
      } else {
          $stickyNav.removeClass("fixed-nav");
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav");
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

  /// ////// ** main-slider** /////////
  const specials = new Swiper('.main-slider .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.main-slider .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.main-slider .swiper-btn-next',
          prevEl: '.main-slider .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** ppx-slider** /////////
  const ppx = new Swiper('.ppx-slider .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.ppx-slider .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.ppx-slider .swiper-btn-next',
          prevEl: '.ppx-slider .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** design-slider-1** /////////
  const designSlider1 = new Swiper('.design-slider-1 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.design-slider-1 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.design-slider-1 .swiper-btn-next',
          prevEl: '.design-slider-1 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** design-slider-2** /////////
  const designSlider2 = new Swiper('.design-slider-2 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.design-slider-2 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.design-slider-2 .swiper-btn-next',
          prevEl: '.design-slider-2 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** fit-out-slider-1** /////////
  const fitOutSlider1 = new Swiper('.fit-out-slider-1 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-1 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-1 .swiper-btn-next',
          prevEl: '.fit-out-slider-1 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  /// ////// ** fit-out-slider-2** /////////
  const fitOutSlider2 = new Swiper('.fit-out-slider-2 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-2 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-2 .swiper-btn-next',
          prevEl: '.fit-out-slider-2 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** fit-out-slider-3** /////////
  const fitOutSlider3 = new Swiper('.fit-out-slider-3 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-3 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-3 .swiper-btn-next',
          prevEl: '.fit-out-slider-3 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });

  /// ////// ** fit-out-slider-4** /////////
  const fitOutSlider4 = new Swiper('.fit-out-slider-4 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-4 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-4 .swiper-btn-next',
          prevEl: '.fit-out-slider-4 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  /// ////// ** fit-out-slider-5** /////////
  const fitOutSlider5 = new Swiper('.fit-out-slider-5 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-5 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-5 .swiper-btn-next',
          prevEl: '.fit-out-slider-5 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  /// ////// ** fit-out-slider-6** /////////
  const fitOutSlider6 = new Swiper('.fit-out-slider-6 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-6 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-6 .swiper-btn-next',
          prevEl: '.fit-out-slider-6 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  /// ////// ** fit-out-slider-7** /////////
  const fitOutSlider7 = new Swiper('.fit-out-slider-7 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-7 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-7 .swiper-btn-next',
          prevEl: '.fit-out-slider-7 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  /// ////// ** fit-out-slider-8** /////////
  const fitOutSlider8 = new Swiper('.fit-out-slider-8 .swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
          el: '.fit-out-slider-8 .swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.fit-out-slider-8 .swiper-btn-next',
          prevEl: '.fit-out-slider-8 .swiper-btn-prev',
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          767: {
              slidesPerView: 1,
          },
          992: {
              slidesPerView: 1,
          },
          1199: {
              slidesPerView: 1,
          },
      },
  });
  ////////////** counter  *///////////////////////////////
  var ax = 0;
  $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      // Md.Asaduzzaman Muhid
      if (ax == 0 && $(window).scrollTop() > oTop) {
          $('.counter-number').each(function() {
              var $this = $(this);
              jQuery({
                  Counter: 0
              }).animate({
                  Counter: $this.text()
              }, {
                  duration: 2000,
                  easing: 'swing',
                  step: function() {
                      $this.text(Math.ceil(this.Counter));
                  }
              });
          });
          ax = 1; // Md.Asaduzzaman Muhid
      }
  });

  ///////// **projects-swiper-section** /////////
  var screen = new Swiper(".projects .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".projects .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".projects .swiper-btn-next",
          prevEl: ".projects .swiper-btn-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 2,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      },
  });

  ///////// **partners-swiper-section** /////////
  var screen = new Swiper(".partners .swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
          el: ".partners .swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".partners .swiper-btn-next",
          prevEl: ".partners .swiper-btn-prev",
      },
      breakpoints: {
          0: {
              slidesPerView: 3,
              spaceBetween: 15,
          },
          767: {
              slidesPerView: 4,
              spaceBetween: 15,
          },

          992: {
              slidesPerView: 5,
              spaceBetween: 30,
          },
          1199: {
              slidesPerView: 6,
              spaceBetween: 30,
          },
      },
  });



  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
      $('.nav-foot-header').addClass('footer-accordion');
      $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function() {
      const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
      $('.footer-accordion').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($(this).siblings().css('max-height') == '0px') {
          $(this).siblings().css('max-height', x);
          $(this).siblings('.nav-foot').css('padding-top', '15px');
      } else {
          $(this).siblings().css('max-height', '0');
          $(this).siblings('.nav-foot').css('padding-top', '0');
      }

      $('.footer-accordion').not(this).siblings().css('max-height', '0');
      $('.footer-accordion')
          .not(this)
          .siblings('.nav-foot')
          .css('padding-top', '0');
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  });



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Fancybox Config
  $('[data-fancybox="gallery"]').fancybox({
      buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
      ],
      loop: false,
      protect: true
  });
  //////////////////////////////////////// validations for contact form //////////////////////////////////////

  const email = document.querySelector('.email');
  const form = document.querySelector('.contact-us-form');
  const emailMessage = document.querySelector('.empty-email-message');
  const errorEmail = document.querySelector('.invalid-email-message');

  form.addEventListener('submit', e => {
      if (email.value) {
          const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
          if (regexMatch) {
              errorEmail.textContent = '';
          } else {
              e.preventDefault();
              errorEmail.textContent = 'email is invalid';
              emailMessage.textContent = "";
          }
      } else {
          e.preventDefault();
          emailMessage.textContent = 'You must type in an email';
          errorEmail.textContent = "";
      }
  });



});