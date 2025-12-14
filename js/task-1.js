
const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {

  const categoryTitle = item.querySelector('h2').textContent;
  
  const subItems = item.querySelectorAll('li');
  
  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${subItems.length}`);
});