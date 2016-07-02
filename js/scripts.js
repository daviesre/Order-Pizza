// Business Logic
function Pizza (toppings1, toppings2, toppings3, size, delivery) {
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;
  this.pizzaSize = size;
  this.delivery = delivery;
}

var pizzaCost = 0;

Pizza.prototype.pizzaPrice = function(price) {
  if (this.pizzaSize === "Extra Large") {
    pizzaCost +=24
  } else if (this.pizzaSize === "Large") {
    pizzaCost += 20;
  } else if (this.pizzaSize === "Medium") {
    pizzaCost += 16;
  } else if (this.pizzaSize === "Small") {
    pizzaCost += 12;
  } else {
    pizzaCost = 0;
  }
    if(this.toppings1 !== "None") {
     pizzaCost += 1;
     }if(this.toppings2 !== "None") {
      pizzaCost += 1;
      }if(this.toppings3 !== "None") {
      pizzaCost += 1;
      }
    if(this.delivery === "delivery") {
      pizzaCost += 2;
    }
}

// User Interface Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    $("#pizza-image").fadeOut();
    event.preventDefault();
    var smallMediumLarge = $("#pizza-size").val();
    var topping1 = $("#pizza-toppings1").val();
    var topping2 = $("#pizza-toppings2").val();
    var topping3 = $("#pizza-toppings3").val();
    var delivery = $("input:radio[name=delivery]:checked").val();
    var newPizza = new Pizza (topping1, topping2, topping3, smallMediumLarge, delivery);
    newPizza.pizzaPrice();
    $("#totalCost").text("Your Order: One " + smallMediumLarge.toLowerCase() + " pizza with selected toppings totals to $" +  pizzaCost + ".00");
    pizzaCost = 0;
    $("#pizza-image").fadeIn();
  });
});
