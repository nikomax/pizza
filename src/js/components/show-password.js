const passwordBtn = $('.js-password-show');

passwordBtn.on('click', (e) => {
  const parent = $(e.currentTarget).parents('.js-password');
  if(parent.hasClass('is-visible')) {
    parent.removeClass('is-visible').find('.js-password-input').attr('type', 'password')
  } else {
    parent.addClass('is-visible').find('.js-password-input').attr('type', 'text')
  }
})
