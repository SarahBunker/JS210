/*
Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

input integer that represents the length of the string
output string of alternating 1s and 0s with length of input

initialize a newstring
intialize digit to 1
iterate for length
  add digit to new string
  switch digit to the other digit
return newString
*/

function stringy(length) {
  let newString = '';
  let digit = '1';

  for (let counter = 1; counter <= length; counter ++) {
    newString += digit;
    digit = (digit === '1' ? '0' : '1');
  }

  return newString;
}

console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"
