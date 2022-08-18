/*
Double Doubles
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits.
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two,
unless the argument is a double number; otherwise, return the double number as-is.

check if double number
  return number
return number * 2

double numbers
  even number of digits
  convert to a string
  extract the first half of the characters
  double the two half and compare to number as string
    if they match it is a double number
    other wise return false

103103
012345

10001000
01234567

length is 6
index to exclude is half the length

*/
function  isDouble(number) {
  const numString = String(number);
  if (numString.length % 2 !== 0) {
    return false
  }

  const endIndex = numString.length / 2

  let substring = numString.slice(0, endIndex)
  if (substring + substring !== numString ) {
    return false
  }

  return true
}

function twice(number) {
  if (isDouble(number)) {
    return number;
  }
  return number * 2;
}

console.log( isDouble(103103));
console.log( isDouble(1031103));
console.log( isDouble());

console.log('-------------------')

console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);      // 668866
console.log(twice(444) === 888);         // 888
console.log(twice(107) === 214);         // 214
console.log(twice(103103) === 103103);      // 103103
console.log(twice(3333) === 3333);        // 3333
console.log(twice(7676) === 7676);        // 7676
