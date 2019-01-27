const btn = $('.js-fixed-menu-btn');
const hiddenContent = $('.js-fixed-menu-content');

btn.on('click', (e)=> {
  $(e.currentTarget).parents('.js-fixed-menu').toggleClass('is-active');
  // hiddenContent.toggleClass('is-visible');
});
