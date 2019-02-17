const tabBtn = $('.js-tab-link');

tabBtn.on('click', (e) => {
  const parent = $(e.currentTarget).parents('.js-tabs');
  const index = $(e.currentTarget).data('tab-index');
  if ($(e.currentTarget).hasClass('is-active')) {
    return
  } else {
    parent.find('.js-tab-link').removeClass('is-active');
    parent.find('.js-tab').removeClass('is-active');
    $(e.currentTarget).addClass('is-active');
    parent.find(`.js-tab[data-tab-index="${index}"]`).addClass('is-active');
  }
})
