const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]; 
const ingredientsListEl = document.querySelector('#ingredients');
const createItem = items => {
  return items.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    return itemEl;
  });
}
const ingredientItems = createItem(ingredients);
ingredientsListEl.append(...ingredientItems);



