class Product {
  #name;
  #cost;
  #acceptingOrders;
  #quantity;
  #description;
  #discount = 0;
  static #tax = 10;
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.#name = name;
    this.#cost = cost;
    this.#acceptingOrders = acceptingOrders;
    this.#quantity = quantity;
    this.#description = description;
  }
  #computeTax() {
    return (Product.#tax / 100) * this.#cost;
  }
  get getName() {
    return this.#name;
  }
  get getCost() {
    return this.#cost;
  }
  get getDescription() {
    return this.#description;
  }
  get getAcceptingOrders() {
    return this.#acceptingOrders;
  }
  get getQuantity() {
    return this.#quantity;
  }
  get stockCost() {
    let stockCost = this.#computeTax() + this.#cost * this.#quantity;
    let discAmt = (this.#discount / 100) * stockCost;
    return this.discount !== 0 ? stockCost - discAmt : stockCost;
  }
  set setDiscount(x) {
    this.#discount = x;
  }
}

export default Product;
