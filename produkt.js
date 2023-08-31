// se torsdag video
//https://kea-alt-del.dk/t7/api/products/1525)
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then((response) => response.json())
.then((data) => showProduct(data));

function showProduct(product){
    //console.log(product);
    document.querySelector("h2.brandname").innerHTML = product.brandname;
    document.querySelector("h3.productdisplayname").innerHTML = product.productdisplayname;
    document.querySelector("p.description").innerHTML = product.description;
    document.querySelector("p.materialcaredesc").innerHTML = product.materialcaredesc;
    document.querySelector("img.imageprodukt").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if (product.soldout) {
        //produktet er udsolgt
        //copy.querySelector("article").classList.add("soldOut");
        document.querySelector(".Udsolgt").classList.remove("hidden");
    
    }
    if (product.discount) {
        //produktet er udsolgt
        document.querySelector(".Rabat").classList.remove("hidden");
    
    }
}