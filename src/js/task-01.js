const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categoryInfo = category => category.forEach(element =>
    console.log(`Категория:${element.querySelector('h2').textContent}.
Количество элементов: ${element.querySelectorAll('li').length}`));
categoryInfo(categoriesEl);
