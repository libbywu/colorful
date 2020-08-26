$(document).ready(function(){

  //menu target scroll 

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.smoothScroll').each(function(){
      $(this).removeClass('active');
      if ($(window).width() < 769) {
        $('.nav-menu').slideUp();
        $('.hamburger_menu').removeClass("animate");
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 60
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {

  }

  //NAV SHOW - HIDE
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav").slideDown(700);
    } else {
      $("#main-nav").slideUp(700);
    }
  });


  //hamburger_menu 
  $('.responsive').on('click', function(e) {
    $('.hamburger_menu').addClass("animate");
    $('.nav-menu').slideToggle();
  });




});