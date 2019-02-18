import './components/item-modal'
import './components/popup'
import './components/accordion'
import './components/sliders'
import './components/calendar'
import './components/chart'
import './components/show-password'
import './components/language-click'
import './components/tabs'
import './components/loyalty'
import Counter from './components/counter'

const fixedMenuBtn = $('.js-fixed-menu-btn');
const burgerBtn = $('.js-burger');
const cartLink = $('.js-cart-link');
const app = $('.js-app');
const sidebar = $('.js-sidebar');
const cart = $('.js-cart-menu');
const verification = $('.js-verification');
const counters = $('.js-counter');

counters.each((item, counter) => {
  new Counter($(counter))
});

fixedMenuBtn.on('click', (e) => {
  $(e.currentTarget).parents('.js-fixed-menu').toggleClass('is-active');
});

burgerBtn.on('click', () => {
  app.toggleClass('menu-open');
});

cartLink.on('click', (e) => {
  e.preventDefault();
  app.toggleClass('cart-open');
});

app.mouseup(function (e) {
  if (sidebar.has(e.target).length === 0 && app.hasClass('menu-open')) {
    app.removeClass('menu-open');
  }
  if (cart.has(e.target).length === 0 && app.hasClass('cart-open')) {
    app.removeClass('cart-open');
  }
});


function goToNextInput(e) {
  var key = e.which,
    t = $(e.target),
    sib = t.next('input');

  // if (key !== 9 && (key < 48 || key > 57)) {
  //   e.preventDefault();
  //   return false;
  // }
  //
  // if (key === 9) {
  //   return true;
  // }

  if (!sib || !sib.length) {
    sib = verification.find('input').eq(0);
  }
  sib.select().focus();
}

// function onKeyDown(e) {
//   var key = e.which;
//
//   if (key === 9 || (key >= 48 && key <= 57)) {
//     return true;
//   }
//
//   e.preventDefault();
//   return false;
// }

function onFocus(e) {
  $(e.target).select();
}

verification.on('keyup', 'input', goToNextInput);
// verification.on('keydown', 'input', onKeyDown);
verification.on('click', 'input', onFocus);

const bonuses = $('.js-bonuses');
const bonusesRevert = $('.js-bonuses-revert');

$('.js-variant').scroll( (e) => {
  if ($(e.currentTarget).scrollLeft() !== 0) {
    bonuses.addClass('is-hidden');
    bonusesRevert.removeClass('is-hidden');
  } else {
    bonuses.removeClass('is-hidden');
    bonusesRevert.addClass('is-hidden');
  }
});

$('.js-delivery-radio').on('click', (e) => {
  if ($(e.currentTarget).find('.js-delivery-radio-delivery:checked').length) {
    $('.js-delivery-addresses').fadeIn();
  } else {
    $('.js-delivery-addresses').fadeOut();
  }
});
