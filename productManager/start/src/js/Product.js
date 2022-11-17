class Product {
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }
  stockCost() {
    return this.cost * this.quantity;
  }
  getDesc() {
    return this.description;
  }
  render() {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name');

    const costDiv = document.createElement('div');
    costDiv.setAttribute('class', 'cost');

    const quantityDiv = document.createElement('div');
    quantityDiv.setAttribute('class', 'quantity');

    const stockCost = document.createElement('div');
    stockCost.setAttribute('class', 'stock-cost');

    const stockBtn = document.createElement('button');
    stockBtn.innerText = 'Stock Cost';
    stockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Total Cost: $${this.stockCost()}`);
    });
    stockCost.append(stockBtn);
    // Discount percentage
    const discountInpDiv = document.createElement('div');
    discountInpDiv.setAttribute('class', 'discount');

    const discInput = document.createElement('input');
    discInput.setAttribute('type', 'number');
    discInput.setAttribute('name', 'discount');
    discInput.setAttribute('min', '0');
    discInput.setAttribute('max', '100');
    discInput.setAttribute('value', '0');
    discInput.addEventListener('keyup', (e) => {
      e.preventDefault();
      // Set discount percentage
    });

    discountInpDiv.append(discInput);

    const viewDescDiv = document.createElement('div');
    viewDescDiv.setAttribute('class', 'view-description');

    const viewDescBtn = document.createElement('button');
    viewDescBtn.innerText = 'Description';
    viewDescBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Description: ${this.getDesc()}`);
    });
    viewDescDiv.append(viewDescBtn);

    const buyBtnDiv = document.createElement('div');
    buyBtnDiv.setAttribute('class', 'buy-btn');

    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Buying ${this.name}`);
    });
    if (this.acceptingOrders === 'No') {
      buyBtn.setAttribute('disabled', true);
    }
    buyBtnDiv.append(buyBtn);

    nameDiv.innerText = this.name;
    costDiv.innerText = `$${this.cost}`;
    quantityDiv.innerText = `${this.quantity} unit(s)`;
    productCard.append(nameDiv, costDiv, quantityDiv, discountInpDiv, stockCost, viewDescDiv, buyBtnDiv);

    return productCard;
  }
}

export default Product;
