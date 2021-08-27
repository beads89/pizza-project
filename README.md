# _Pizza Parlor_

#### By _**Brandon Eads**_

---

## Description

_This webpage allows a user to put together a pizza using 3 different sizes and a number of ingredient options. When hitting a submit, the user will be able to see what size pizza they ordered, along with their toppings and total cost._

## Technologies Used

* _HTML5_
* _CSS_
* _JavaScript_
* _Bootstrap Framework for CSS_
* _jQuery 3.6.0 library for JavaScript_


## Setup/Installation Requirements

* _Download or clone github repository to local machine in desired directory_
* _If downloaded, extract .zip contents to desired directory_
* _Navigate to and open folder_
* _Open index.html_


## Known Bugs

* _Any known issues_
* _should go here_

## License

MIT

Copyright (c) Brandon Eads

## Contact Information

_{Add your contact information here.}_


## TDD

Describe: Pizza(size, topping);

Test: It should create a pizza with a size, topping, and a price.
Code: let pizza = new Pizza("Large", "Pepperoni");
      pizza;
Expected Output: expect(Pizza("Large", "Pepperoni")).toEqual(Pizza {size: "Large", topping: "Pepperoni", price: 0})


Describe: Pizza.prototype.sizeCost;
Test: It should create a pizza that cost $10, $15 or $20 dollars depending on if it's medium, large, or extra large.
Code: let pizza = new Pizza("Large", "Pepperoni");
      pizza.sizeCost();
      pizza;
Expected Output: expect(Pizza("Large", "Pepperoni")).toEqual(Pizza {size: "Large", topping: "Pepperoni", price: 15})


Describe: Pizza.prototype.toppingCost;
Test: It should add $2 to the cost of a pizza when a topping is added.
Code: let pizza = new Pizza("Large", ["Pepperoni"]);
      pizza.sizeCost();
      pizza.toppingCost();
      pizza;
Expected Output: expect(Pizza("Large", "Pepperoni")).toEqual(Pizza {size: "Large", topping: ["Pepperoni"], price: 17})
