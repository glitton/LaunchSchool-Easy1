const readline = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

const length = readline.question("Enter the length of the room in meters: ");
const width = readline.question("Enter the width of the room in meters: ");

const roomSizeSquareMeters = length * width;
const roomSizeSquareFeet = roomSizeSquareMeters * SQMETERS_TO_SQFEET;

const result = readline.question(
  `The area of the room is ${roomSizeSquareMeters} square meters (${roomSizeSquareFeet} square feet).`
);

// Launch School solution

// let readlineSync = require("readline-sync");

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = length * width;
// let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(
//     2
//   )} square meters (${areaInFeet.toFixed(2)} square feet).`
// );
