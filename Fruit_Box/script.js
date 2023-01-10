/*......................................
Fruit Plus
......................................*/
let fruitNumber = document.getElementById("fruit-number");
let fruitQuantity = fruitNumber.value;
let productPrice = document.getElementById("fruit-total").innerText;
document.getElementById("fruit-plus").addEventListener("click", function () {
  fruitQuantity++;
  fruitNumber.value = fruitQuantity;
  // Product Price

  let totalPrice = parseInt(productPrice) * fruitQuantity;
  document.getElementById("fruit-total").innerText = totalPrice;
  console.log(productPrice);
});

/*.................................
Fruit Minus
..................................*/
document.getElementById("fruit-minus").addEventListener("click", function () {
  if (fruitQuantity > 1) {
    fruitQuantity--;
    fruitNumber.value = fruitQuantity;
    let totalPrice = parseInt(productPrice) * fruitQuantity;
    document.getElementById("fruit-total").innerText = totalPrice;
  }
});
