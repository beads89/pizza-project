# _Pizza Parlor_

#### By _**Brandon Eads**_

---

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_



## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? Does it require building packages? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

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
Expected Output: expect(Pizza("Large", "Pepperoni")).toEqual(Pizza {size: "Large", topping: "Pepperoni", price: 20})

