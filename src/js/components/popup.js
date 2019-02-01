const closePopup = $('.js-popup-close');
// const popupBtn = $('.js-popup-link');

closePopup.on('click', (e) => {
  $(e.currentTarget).parents('.js-popup').removeClass('is-active')
});

// popupBtn.on('click', (e) => {
//   const dataPopup = $(e.currentTarget).data('popup')
// });
