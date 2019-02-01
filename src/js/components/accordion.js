const accordionLink = $('.js-accordion-link');

accordionLink.on('click', (e) => {
  console.log(e);
  const parent = $(e.currentTarget).parents('.js-accordion');
  if (parent.hasClass('is-active')) {
    parent.removeClass('is-active').find('.js-accordion-content').slideUp();
  } else {
    parent.addClass('is-active').find('.js-accordion-content').slideDown();
  }
});
