const typeTextContainer = $('.js-typewriter');
if (typeTextContainer.length) {
  const typeText = typeTextContainer.data('typewriter-text');
  const textArr = typeText.split('');
  const htmlArr = textArr.map(item => {
    return `<span>${item}</span>`
  });

  htmlArr.forEach(item => {
    typeTextContainer.append(item);
  });


  $(window).on('load', () => {
    typeTextContainer.find('span').each((index, item) => {
      setTimeout(() => {
        $(item).css('opacity', 1)
      }, 100 * index)
    });
  });
}
