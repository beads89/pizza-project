// Business

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.sizeCost = function() {
  if (this.size === "Medium") {
    this.price += 10;
  } else if (this.size === "Large") {
    this.price += 15;
  } else {
    this.price += 20;
  }
}

Pizza.prototype.toppingCost = function() {}