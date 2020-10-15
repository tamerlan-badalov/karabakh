
$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $(".up-footer__events").parent().removeClass("justify-content-center")
      $(".brd").removeClass("brd");
    }
    
  });
 
   $(".btn-search").click(function(){
     $(".secondary-form").toggleClass("show-form");
     $("body").toggleClass("stuck");
   })
  
  $(".closeform").click(function () {
    $(".secondary-form ").removeClass("show-form");
    $("body").removeClass("stuck");
  });

  $("#btnBrgr").click(function () {
    $(".burger-list ").toggleClass("clickBrg");
    $(this).toggleClass("trick");
    $("body").toggleClass("stuck");

  });



  $(".menu_click").click(function (e) {

    if ($(this).children("div").hasClass("click")) {

      $(this).children("div").removeClass("click");
      return
    }
    $(".menu_click").children("div").removeClass("click");

    $(this).children("div").toggleClass("click");
  });

  $("main").click(function () {
    console.log(true)
    if ($(".menu_click").children("div").hasClass("click")) {
    
    $(".menu_click").children("div").removeClass("click");
      
    }
  
  })
  

  $(".lang-box").click(function () {
    $(".drop-menu__list--lang").toggleClass("click")
  })

});

$('.slider-element').slick({
  infinite: true,
  accessibility: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<img class="slick-prev" src="img/firstSld.png" alt="">',
  nextArrow: ' <img class="slick-next" src="img/firstSld.png" alt="">',
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {

        arrows: false

      }
    }

  ]
});

$('.section-eventSlider__wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: ' <img class="prevImg" src="img/Vector 5.svg" alt="">',
  nextArrow: ' <img class="nextImg" src="img/Vector 5.svg" alt="">',
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }

  ]
});