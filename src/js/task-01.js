const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length} \n\n`);

for (const category of categoriesEl) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length} \n\n`);
}




