export default class Counter {
  constructor(element) {
    this.parent = element;
    this.plusBtn = this.parent.find('.js-counter-increment');
    this.minusBtn = this.parent.find('.js-counter-decrement');
    this.shower = this.parent.find('.js-counter-value');
    this.currentValue = this.shower.data('count-value');

    this.init()
  }
  updValue() {
    this.shower.html(this.currentValue)
  }
  increment() {
    this.currentValue++;
    this.updValue();
  }
  decrement() {
    if ( this.currentValue <= 0) {
      return
    }
    this.currentValue--;
    this.updValue();
  }
  init() {
    this.plusBtn.on('click', () => {
      this.increment();
    });
    this.minusBtn.on('click', () => {
      this.decrement();
    })
  }
}
