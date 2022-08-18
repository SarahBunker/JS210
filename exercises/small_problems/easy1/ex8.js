/* Gregorian leap year

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

function, takes year, outputs boolean: true if leap year
  leap years: divisible by 4
    unless divisible by 100 then not a leap year
    unless it is also divisible by 400

divisible by 400 > leap year
divisible by 100 > not a leap year
divisible by 4 > leap year

------------------------------
Update for Julian Calendar
prior to 1752 leap years occur any year that is divisible by 4;

*/

function isLeapYear(inputYear) {
  if (inputYear % 400 === 0 ) {
    return true;
  }

  if (inputYear % 100 === 0 && inputYear > 1752) {
    return false;
  }

  return (inputYear % 4 === 0 );
}


console.log(isLeapYear(2016)      === true );      // true
console.log(isLeapYear(2015)      === false );      // false
console.log(isLeapYear(2100)      === false );      // false
console.log(isLeapYear(2400)      === true );      // true
console.log(isLeapYear(240000)    === true );    // true
console.log(isLeapYear(240001)    === false );    // false
console.log(isLeapYear(2000)      === true );      // true
console.log(isLeapYear(1900)      === false );      // false
console.log(isLeapYear(1752)      === true );      // true
console.log(isLeapYear(1700)      === true );      // false
console.log(isLeapYear(1)         === false );         // false
console.log(isLeapYear(100)       === true );       // false
console.log(isLeapYear(400)       === true );       // true
