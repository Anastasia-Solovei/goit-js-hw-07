const refs = {
    input: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    containerForBoxes: document.querySelector('#boxes'),
}

refs.renderBtn.addEventListener('click', onBoxesCreate);
refs.destroyBtn.addEventListener('click', onBoxesDestroy);

let boxSize = 30;
function randomBgColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

function onBoxesCreate() {
    let ammount = Number(refs.input.value);
    const boxes = [];

    for (let i = 1; i <= ammount; i += 1) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = randomBgColor();

        boxes.push(box);
        boxSize += 10;
    }

    refs.containerForBoxes.append(...boxes);
}

function onBoxesDestroy() {
    refs.containerForBoxes.innerHTML = '';
}
