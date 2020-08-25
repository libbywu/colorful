$(document).ready(function(){

  //SMOOTH SCROLL

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 70
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
      });
    }
  }

  //NAVBAR SHOW - HIDE


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav").slideDown(700);
      // $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      // $("#main-nav-subpage").hide();
      // $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // RESPONSIVE MENU

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });



});