/*......................................
Fruit Plus
......................................*/
document.getElementById("fruit-plus").addEventListener("click", function () {
  let fruitNumber = document.getElementById("fruit-number");
  let fruitQuantity = fruitNumber.value;
  fruitQuantity++;
  fruitNumber.value = fruitQuantity;
});
