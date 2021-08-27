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


//UI

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const pizzaSize = $("#sizeSelect").val();
    const pizzaTopping = $(".toppings:checked");
    let toppingArray = [];
    pizzaTopping.each(function() {
      toppingArray.push($(this).val());
    })

    const ordered = new Pizza(pizzaSize, toppingArray);
    ordered.sizeCost();
    ordered.toppingCost();

    $("#orderShow").show();
    $("#size").text(ordered.size);
    $("#topping").text((" ") + (ordered.topping).join(", "));
    $("#cost").text(ordered.price);
  })
})