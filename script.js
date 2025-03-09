// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productName = product.querySelector('h3').innerText;
    const productPrice = product.querySelector('p').innerText;
    alert(`Added to cart: ${productName} - ${productPrice}`);
  });
});