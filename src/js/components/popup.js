const closePopup = $('.js-popup-close');

closePopup.on('click', (e) => {
  $(e.currentTarget).parents('.js-popup').removeClass('is-active')
});
