// Business Logic
function Pizza (toppings1, toppings2, toppings3, size) {
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
  this.pizzaSize = size;
}
var pizzaCost = 0;

Pizza.prototype.pizzaPrice = function(price) {
  if (this.pizzaSize === "Large") {
    pizzaCost += 20;
    console.log(pizzaCost)
  } else if (this.pizzaSize === "Medium") {
    pizzaCost += 16;
    console.log(pizzaCost);

  } else if (this.pizzaSize === "Small") {
    pizzaCost += 12;
    console.log(pizzaCost);
  } else {
    console.log(0);
  }
    if(this.toppings1 !== "Cheese") {
     pizzaCost += 1;
     console.log(pizzaCost);
     }if(this.toppings2 !== "None") {
      pizzaCost += 1;
      console.log(pizzaCost);
      }if(this.toppings3 !== "None") {
      pizzaCost += 1;
      }
}

// User Interface Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var smallMediumLarge = $("#pizza-size").val();
    var topping1 = $("#pizza-toppings1").val();
    var topping2 = $("#pizza-toppings2").val();
    var topping3 = $("#pizza-toppings3").val();
    console.log(smallMediumLarge);
    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
    var newPizza = new Pizza (topping1, topping2, topping3, smallMediumLarge);
    var total = newPizza.pizzaPrice();
    $("#totalCost").text("Your " + " pizza costs $" +  pizzaCost);
    pizzaCost = 0;

  });
});
