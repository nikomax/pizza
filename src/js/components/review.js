const reviewBtn = $('.js-review-btn');
const reviewWindowPage = $('.js-review-page');
const headerNav = $('.js-header-nav');
const headerBack = $('.js-header-back');

reviewBtn.on('click', (e) => {
  e.preventDefault();
  reviewWindowPage.addClass('is-active');
  headerNav.addClass('is-active');
});

headerBack.on('click', (e) => {
  e.preventDefault();
  reviewWindowPage.removeClass('is-active');
  headerNav.removeClass('is-active');
});
