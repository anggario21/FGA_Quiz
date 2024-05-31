function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

function fizzBuzz(int) {
  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

function secondLargest(arr) {
  const largest = Math.max(...arr);
  const newArr = arr.filter((num) => num !== largest);
  console.log(Math.max(...newArr));
}

secondLargest([1, 2, 3, 4, 5]);

let products = [
  { id: 1, name: "Product A", price: 1000, points: 10 },
  { id: 2, name: "Product B", price: 2000, points: 25 },
  { id: 3, name: "Product C", price: 5000, points: 50 },
  { id: 4, name: "Product D", price: 8000, points: 100 },
];
let availablePoints = 150;

let purchasedProducts = [];
let totalSpent = 0;

function getMaxPointsProduct() {
  let maxPointsProduct = 0;
  for (let product of products) {
    if (product.points > maxPointsProduct) {
      maxPointsProduct = product.points;
    }
  }
  return maxPointsProduct;
}

function calculateRemainingPoints(callback) {
  console.log(`Remaining Points : ${(availablePoints -= callback)}`);
  availablePoints += callback;
}

function redeemProducts() {
  products.sort((a, b) => b.points - a.points);

  for (let product of products) {
    if (availablePoints >= product.points) {
      purchasedProducts.push(product.name);
      totalSpent += product.points;
      availablePoints -= product.points;
    }
  }
  console.log(`Daftar Produk Yang dibeli : ${purchasedProducts} `);
  console.log(`Total Pengeluaran Poin : ${totalSpent}`);
}

console.log(`Max Points Product : ${getMaxPointsProduct()}`);
calculateRemainingPoints(getMaxPointsProduct());
redeemProducts();
