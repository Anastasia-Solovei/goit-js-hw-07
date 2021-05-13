const refs = {
    fontSizeControl: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text'),
}

refs.fontSizeControl.addEventListener('input', onSpanChange);

function onSpanChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}