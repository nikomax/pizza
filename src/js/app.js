const btn = $('.js-fixed-menu-btn');
const burgerBtn = $('.js-burger');
const app = $('.js-app');
const sidebar = $('.js-sidebar');

btn.on('click', (e)=> {
  $(e.currentTarget).parents('.js-fixed-menu').toggleClass('is-active');
});

burgerBtn.on('click', () => {
  app.toggleClass('menu-open');
});

app.mouseup(function(e) {
  const div = sidebar;
  if (div.has(e.target).length === 0 && app.hasClass('menu-open')) {
    app.removeClass('menu-open');
  }
});
