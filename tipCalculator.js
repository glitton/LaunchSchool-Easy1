const readline = require("readline-sync");

const bill = parseFloat(readline.question("What is the bill? "));
const percent = parseFloat(readline.question("What is the tip percentage? "));

const tip = bill * (percent / 100);
const total = bill + tip;

console.log(`The tip is ${tip.toFixed(2)}`);
console.log(`The total bill is ${total.toFixed(2)}`);
console.log(typeof tip);
console.log(typeof total);

//why use parseFloat?
// let total = bill + tip; line, we would encounter a problem. Since bill is a string and since + performs concatenation when either operand is a string, the value assigned to total variable would be the string "20030"
