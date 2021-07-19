const counter = {
    value: 0,
    decrement() {
        // console.log('decrement -> this', this);
        this.value -= 1;
    },
    increment() {
        // console.log('increment -> this', this);
        this.value += 1;
    }
};

const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('.js-decrement-btn');
const incrementButton = document.querySelector('.js-increment-btn');

decrementButton.addEventListener('click', function ( ) {
    counter.decrement();
    console.log(counter);
    counterValue.textContent = counter.value;
 });
incrementButton.addEventListener('click', function ( ) {
    counter.increment();
    console.log(counter);
    counterValue.textContent = counter.value;
});

