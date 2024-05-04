// PEDAC
// Process the problem
// inputs:
// - integer greater than 0
// - determine sum or product of all numbers between 1 and the integer inclusive

// output:
// - if sum, add all numbers from 1 to user entered integer
// - if product, multiply all numbers from 1 to user entered integer

// Examples/Test Case
// integer is 5, user wants sum
// sum = 1 + 2 + 3 + 4 + 5 or 15
// product = 1*2*3*4*5 or 720

// Data Structure is an array
// Algorith is to loop through the numbers from 1 to the integer

const readline = require("readline-sync");

const integer = parseFloat(
  readline.question("Please enter an integer greater than 0: ")
);

const operation = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);
let sum = 0;
let product = 1;

if (operation === "s") {
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  console.log(sum);
}
for (let i = 1; i <= integer; i++) {
  product *= i;
}
console.log(product);
