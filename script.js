// ================================
// Banjara Connect v1.0
// script.js
// ================================

// Cart Data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart Count Update
function updateCartCount() {

    const cartLink = document.querySelector('a[href="cart.html"]');

    if(cartLink){
        cartLink.innerHTML = "🛒 Cart (" + cart.length + ")";
    }

}

// Add To Cart
function addToCart(name, price){

    let product = {
        id: Date.now(),
        name: name,
        price: price,
        quantity:1
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " cart me add ho gaya.");

}

// Search Products
const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

    let filter = this.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(filter)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

}

// Shop Button
const shopBtn = document.querySelector(".shop-btn");

if(shopBtn){

shopBtn.addEventListener("click",function(){

    document.querySelector(".products").scrollIntoView({
        behavior:"smooth"
    });

});

}

// Page Load
window.onload=function(){

updateCartCount();

console.log("Banjara Connect Loaded Successfully");

};