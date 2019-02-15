const langButton = $('.js-language-radio-btn');
const clickSound = document.getElementById('audio-click');

langButton.on('click', (e) => {
  if ($(e.currentTarget).parents('.js-language-radio').find('.js-language-radio-input:checked').length){
    return
  } else {
    clickSound.play();
  };
});
