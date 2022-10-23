const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length} \n\n`);

for (const category of categories) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length} \n\n`);
}




