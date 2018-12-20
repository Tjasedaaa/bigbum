jQuery(function($){
  $('.slider-main').slick({
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: '<span class="slickArrow slickArrow--prev">&#8249;</span>',
    nextArrow: '<span class="slickArrow slickArrow--next">&#8250;</span>'
  });
});
