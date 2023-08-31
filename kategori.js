fetch("https://kea-alt-del.dk/t7/api/categories)")
    .then(res => res.json())
    .then(showCategories)

function showCategories(cats) {
    //looper og kalder showProduct
    cats.forEach(showCategories);
}

function showCategory(cats) {
    //fanger vores template
    const template = document.querySelector("template").content;
    //cloner
    const clone = template.cloneNode(true);
    //ændre indhold
    clone.querySelector("a").textContent = cat.category;
    clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

    //apennder
    document.querySelector(".letterGroup").appendChild(clone);


}
