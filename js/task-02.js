const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('ul#ingredients');

const itemsEl = ingredients.map( (ingredient) => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    return itemEl;
});

listEl.append(...itemsEl);