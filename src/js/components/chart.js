const value = $('.js-progress-value');
const radius = value.attr('r');
const c = Math.PI * (radius * 2);
const current = value.data('chart-value');
const pct = ((100 - current) / 100) * c;

$(window).on('load', () => {
  value.attr('stroke-dashoffset', pct);
});

