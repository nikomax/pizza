import './components/item-modal'

const btn = $('.js-fixed-menu-btn');
const burgerBtn = $('.js-burger');
const app = $('.js-app');
const sidebar = $('.js-sidebar');
const verification = $('.js-verification');

btn.on('click', (e) => {
  $(e.currentTarget).parents('.js-fixed-menu').toggleClass('is-active');
});

burgerBtn.on('click', () => {
  app.toggleClass('menu-open');
});

app.mouseup(function (e) {
  const div = sidebar;
  if (div.has(e.target).length === 0 && app.hasClass('menu-open')) {
    app.removeClass('menu-open');
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

