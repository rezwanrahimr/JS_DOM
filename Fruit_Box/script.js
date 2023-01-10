// Sub Total
function subTotalPlus(num) {
  let subTotal = document.getElementById("sub-total").innerText;
  let updateSubTotal = Math.floor(subTotal);
  document.getElementById("sub-total").innerText = updateSubTotal + Number(num);
}
function subTotalMinus(num) {
  let subTotal = document.getElementById("sub-total").innerText;
  let updateSubTotal = Math.ceil(subTotal);
  document.getElementById("sub-total").innerText = updateSubTotal - Number(num);
  console.log("sub total", subTotal);
}
// sub tex
function tex() {
  let tex = document.getElementById("sub-total").innerText / 10;
  document.getElementById("tax-amount").innerText = tex;
}
// total
function total() {
  document.getElementById("total-price").innerHTML =
    Number(document.getElementById("tax-amount").innerText) +
    Number(document.getElementById("sub-total").innerText);
}
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

  subTotalPlus(productPrice);
  tex();
  total();
});

/*.................................
Fruit Minus
..................................*/
document.getElementById("fruit-minus").addEventListener("click", function () {
  if (fruitQuantity > 0) {
    fruitQuantity--;
    fruitNumber.value = fruitQuantity;
    let totalPrice = parseInt(productPrice) * fruitQuantity;
    document.getElementById("fruit-total").innerText = totalPrice;
    subTotalMinus(productPrice1);
  } else {
    alert("Add Some Fruits");
  }
});

/*......................................
Fruit Plus
......................................*/
let fruitNumber1 = document.getElementById("fruit1-number");
let fruitQuantity1 = fruitNumber1.value;
let productPrice1 = document.getElementById("fruit1-total").innerText;
document.getElementById("fruit1-plus").addEventListener("click", function () {
  fruitQuantity1++;
  fruitNumber1.value = fruitQuantity1;
  // Product Price

  let totalPrice1 = parseInt(productPrice1) * fruitQuantity1;
  document.getElementById("fruit1-total").innerText = totalPrice1;
  subTotalPlus(productPrice1);
});
/*.................................
Fruit Minus
..................................*/
document.getElementById("fruit1-minus").addEventListener("click", function () {
  if (fruitQuantity1 > 0) {
    fruitQuantity1--;
    fruitNumber1.value = fruitQuantity1;
    let totalPrice1 = parseInt(productPrice1) * fruitQuantity1;
    document.getElementById("fruit1-total").innerText = totalPrice1;
    subTotalMinus(productPrice1);
  } else {
    alert("Add Some Fruits");
  }
});

/*.................................
sub total
..................................*/

// console.log(a);
