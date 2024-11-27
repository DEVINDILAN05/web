// JavaScript to handle the "Add to Cart" functionality
let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(`${item} has been added to your cart!`);
    console.log(cart);
}
