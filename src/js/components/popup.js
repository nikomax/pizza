const closePopup = $('.js-popup-close');
const closeModal = $('.js-modal-close');
// const popupBtn = $('.js-popup-link');

closePopup.on('click', (e) => {
  $(e.currentTarget).parents('.js-popup').removeClass('is-active')
});

closeModal.on('click', (e) => {
  $(e.currentTarget).parents('.js-modal').removeClass('is-active');
  $('.js-app').removeClass('is-blured');
});

// popupBtn.on('click', (e) => {
//   const dataPopup = $(e.currentTarget).data('popup')
// });
