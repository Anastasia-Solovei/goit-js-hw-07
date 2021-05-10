
const categoriesEl = document.querySelectorAll('ul#categories .item');

const quantityOfCategoriesEl = categoriesEl.length;
console.log(`В списке ${quantityOfCategoriesEl} категории.`);

categoriesEl.forEach(categoryEl => {
    console.log(`Категория: ${ (categoryEl.querySelector('h2').textContent) }`);
    console.log(`Количество элементов: ${(categoryEl.querySelectorAll('ul li').length)}`);
} 
);