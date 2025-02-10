

import Item from './class.mjs';


const items = [
  new Item(1, 'Laptop', 899, 'A powerful laptop with great performance.', 'laptop.jpg'),
  new Item(2, 'Smartphone', 499, 'A sleek smartphone with a high-quality camera.', 'smartphone.jpg'),
  new Item(3, 'Headphones', 150, 'Noise-canceling headphones for quality audio.', 'headphones.jpg')
];


const itemContainer = document.getElementById('item-container');
items.forEach(item => {
  itemContainer.innerHTML += item.displayItem();
});


let cart = [];

document.body.addEventListener('click', (event) => {
  if (event.target && event.target.matches('.add-to-cart')) {
    const itemId = event.target.getAttribute('data-id');
    const item = items.find(item => item.id == itemId);
    if (item) {
      cart.push(item);
      console.log('Item added to cart:', item);
    }
  }
});
