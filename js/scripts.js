// Business Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}
var pizzaCost = 0;

Pizza.prototype.pizzaPrice = function(price) {
  if (this.pizzaSize === "Large") {
    pizzaCost += 20;
    console.log(pizzaCost)
  } else if (this.pizzaSize === "Medium") {
    pizzaCost += 15;
    console.log(pizzaCost);
  } else if (this.pizzaSize === "Small") {
    pizzaCost += 12;
    console.log(pizzaCost);
  } else {
    console.log(0);
  }
}

// User Interface Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var smallMediumLarge = $("#pizza-size").val();
    var pineappleBacon = $("#pizza-toppings").val();
    console.log(smallMediumLarge);
    console.log(pineappleBacon);
    var newPizza = new Pizza (pineappleBacon, smallMediumLarge);
    var total = newPizza.pizzaPrice();
    $("#totalCost").text("Your " + " pizza costs $" +  pizzaCost);
    pizzaCost = 0;

  });
});
