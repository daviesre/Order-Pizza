// Business Logic
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.pizzaSize = size;
}
//Need to collect inputs into newPizza, then create a prototype that gathers price based on choices
var newPizza = new Pizza //inputToppings, inputSize//)
Pizza.prototype.price = [];
// User Interface Logic
$(document).ready(function(){
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var smallMediumLarge = $("#pizza-size").val();
    var pineappleBacon = $("#pizza-toppings").val();
    console.log(smallMediumLarge);
    console.log(pineappleBacon);
  });
});
