/*What makes a leap year? 
Not a Lear year: leap year divisible by 4 and divisible 100
Leap year: divisible by 400 or divisible by 4
*/

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2015)); // false
// console.log(isLeapYear(2100)); // false
// console.log(isLeapYear(2400)); // true

// console.log(isLeapYear(240000)); // true
// console.log(isLeapYear(240001)); // false
// console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); //true
