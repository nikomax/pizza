import 'slick-carousel'
import Counter from './counter';

const earnDiv = $('.js-loyalty-earn-pts');
const payDiv = $('.js-loyalty-pay-pts');
const counterDiv = $('.js-counter-loyalty');

let earnPts = 0;
let payPts = 0;
let earnPtsSumm = 0;
let payPtsSumm = 0;
let count = counterDiv.find('.js-counter-value').data('count-value');

$('.js-loyalty-slider').on('init', function(){
  const slide = $(this).find('.slick-slide[data-slick-index="0"]');
  earnPts = slide.data('earn-pts');
  payPts = slide.data('pay-pts');
  earnPtsSumm = earnPts*count;
  payPtsSumm = payPts*count;
  earnDiv.html(earnPtsSumm + ' pts');
  payDiv.html(payPtsSumm + ' pts');
});

$('.js-loyalty-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rows: 0,
  dots: false
});

$('.js-loyalty-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  const slide = $(this).find(`.slick-slide[data-slick-index="${currentSlide}"]`);
  earnPts = slide.data('earn-pts');
  payPts = slide.data('pay-pts');
  earnPtsSumm = earnPts*count;
  payPtsSumm = payPts*count;
  earnDiv.html(earnPtsSumm + ' pts');
  payDiv.html(payPtsSumm + ' pts');
});

const counter = new Counter($(counterDiv));

counter.returnValue = (val) => {
  count = val;
  earnPtsSumm = earnPts*count;
  payPtsSumm = payPts*count;
  earnDiv.html(earnPtsSumm + ' pts');
  payDiv.html(payPtsSumm + ' pts');
};
