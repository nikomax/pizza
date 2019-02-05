import 'slick-carousel'

$('.js-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rows: 0,
  dots: true
});

$('.js-loyalty-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rows: 0,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.js-menu-slider').slick({
  infinite: true,
  slidesToShow: 5,
  centerPadding: '0',
  centerMode: true,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true
});
