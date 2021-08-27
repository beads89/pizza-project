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

Pizza.prototype.toppingCost = function() {
  for (i = 0; i < this.topping.length; i++) {
    this.price += 2;
  }
}
// Possible to use if else for adding price?
// Have toppings be an array and add price depending on length?