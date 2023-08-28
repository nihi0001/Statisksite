fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
    .then(res => res.json())
    .then(showProducts)

function showProducts(products) {
    //looper og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product) {
    //console.log(product);
    // fang template
    const template = document.querySelector("#smallProductTemplate").textContent;
    // lav en kopi
    const copy = template.cloneNode(true);

    //appende
    document.querySelector("main").appendChild(copy);

}

