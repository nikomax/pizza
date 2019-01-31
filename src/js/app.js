import './components/item-modal'
import './components/popup'

const fixedMenuBtn = $('.js-fixed-menu-btn');
const burgerBtn = $('.js-burger');
const cartLink = $('.js-cart-link');
const app = $('.js-app');
const sidebar = $('.js-sidebar');
const cart = $('.js-cart-menu');
const verification = $('.js-verification');

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

  if (key !== 9 && (key < 48 || key > 57)) {
    e.preventDefault();
    return false;
  }

  if (key === 9) {
    return true;
  }

  if (!sib || !sib.length) {
    sib = verification.find('input').eq(0);
  }
  sib.select().focus();
}

function onKeyDown(e) {
  var key = e.which;

  if (key === 9 || (key >= 48 && key <= 57)) {
    return true;
  }

  e.preventDefault();
  return false;
}

function onFocus(e) {
  $(e.target).select();
}

verification.on('keyup', 'input', goToNextInput);
verification.on('keydown', 'input', onKeyDown);
verification.on('click', 'input', onFocus);

