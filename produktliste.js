//fetche
fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
    .then(res => res.json())
    .then(showProducts)

function showProducts(products) {
    //looper og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product) {
    //console.log(product);
    // clone, ændre og appende
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);


// ændre indhold
copy.querySelector("img.image1").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
copy.querySelector("h2.productdisplayname").textContent = product.productdisplayname;
copy.querySelector("p.brandname").textContent = product.brandname;
copy.querySelector("p.articletype").textContent = product.articletype;
copy.querySelector("p.price").textContent = product.price;
copy.querySelector("p.discount").textContent = product.discount;
copy.querySelector("p.soldout").textContent = product.soldout;


if (product.soldout) {
    //produktet er udsolgt
    //copy.querySelector("article").classList.add("soldOut");
    copy.querySelector(".Udsolgt").classList.remove("hidden");

}
if (product.discount) {
    //produktet er udsolgt
    copy.querySelector(".Rabat").classList.remove("hidden");

}

//copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

//appende
//document.querySelector("main").appendChild(copy);
document.querySelector("main .grid").appendChild(copy);
}



// html:
// <template id="smallProductTemplate">
// <article class="smallProduct">
//     <a href="produkt.html">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/1164.webp" alt="">
//     </a>
//     <p class="id">1163 </p>
//     <p class="gender">Men</p>
//     <p class="category">Apparel</p>
//     <p class="subcategory">Topwear</p>
//     <p class="articletype">Tshirts</p>
//     <p class="season">Summer</p>
//     <p class="productionyear">2011</p>
//     <p class="productdisplayname">Sahara Team India Fanwear Round Neck Jersey</p>
//     <p class="price">895</p>
//     <p class="discount">null</p>
//     <p class="brandname">Nike</p>
//     <p class="soldout">0</p>
// </article>
// </template>