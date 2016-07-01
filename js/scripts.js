// Business Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.pizzaPrice = function(price) {
  if (this.pizzaSize === "Large") {
    console.log(22)
  } else if (this.pizzaSize === "Medium") {
    console.log(16);
  } else if (this.pizzaSize === "Small") {
    console.log(12);
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
    newPizza.pizzaPrice();
  });
});
