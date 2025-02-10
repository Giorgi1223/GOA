

export default class Item {
    constructor(id, name, price, description, image) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  

    displayItem() {
      return `
        <div class="item">
          <img src="${this.image}" alt="${this.name}" class="item-image" />
          <h3 class="item-name">${this.name}</h3>
          <p class="item-description">${this.description}</p>
          <p class="item-price">$${this.price}</p>
          <button class="add-to-cart" data-id="${this.id}">Add to Cart</button>
        </div>
      `;
    }
  }
  