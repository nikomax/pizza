import 'slick-carousel'

$('.js-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rows: 0,
  dots: true
});

$('.js-simple-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true
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
