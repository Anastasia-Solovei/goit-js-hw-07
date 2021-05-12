const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#counter #value'),
}

refs.decrementBtn.addEventListener('click', onCounterDecrement);
refs.incrementBtn.addEventListener('click', onCounterIncrement);

let counterValue = 0;

function onCounterDecrement() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
}
    
function onCounterIncrement() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
}
