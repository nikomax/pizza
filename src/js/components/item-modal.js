const modalLink = $('.js-item-modal-btn');
const modalWindow = $('.js-item-modal');
const modalWindowTitile = $('.js-item-modal-title');
const modalWindowDesc = $('.js-item-modal-desc');
const modalWindowImage = $('.js-item-modal-image');

modalLink.on('click', (e) => {
  const title = $(e.currentTarget).data('item-title');
  const desc = $(e.currentTarget).data('item-desc');
  const image = $(e.currentTarget).data('item-image');
  modalWindowTitile.html(title);
  modalWindowDesc.html(desc);
  modalWindowImage.attr({'src': image, 'alt': title});
  modalWindow.fadeIn();
});

modalWindow.on('click', (e) => {
  $(e.currentTarget).fadeOut();
});
