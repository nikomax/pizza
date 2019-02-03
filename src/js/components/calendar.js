import 'flatpickr';

$('.js-calendar').flatpickr({
  mode: "range",
  onOpen: () => {
    $('.js-calendar').attr('style', '');
    $('.js-app').addClass('is-blured')
  },
  onClose: () => {
    $('.js-app').removeClass('is-blured')
  }
});
