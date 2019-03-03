const deleteBtn = $('.js-delete-item-btn');

deleteBtn.on('click', (e) => {
  const deleteItem = $(e.currentTarget).parents('.js-delete-item');
  deleteItem.remove()
});
