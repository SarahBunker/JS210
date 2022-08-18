/*
What Century is That

Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

2000 to 20th
2001 to 21st

getting the number of the century
take year and divide it by 100
the result is the century
add one if the remainder is nonzero

getting the ending
  ends in the teens 11, 12, 13  > th
  ends in 1    > st
  ends in 2    > nd
  ends in 3    > rd
  ends in 4,5,7,8,9,
  ends in zero > th
*/

function century(year) {
  let numString;
  numString = parseInt(year / 100)
  if (year % 100 !== 0 ) {
    numString += 1
  }
  numString = String(numString);

  let suffix = '';
  if (numString.endsWith('11') || numString.endsWith('12') || numString.endsWith('13')) {
    suffix = 'th';
  } else if (numString.endsWith('1')) {
    suffix = 'st';
  } else if (numString.endsWith('2')) {
    suffix = 'nd';
  } else if (numString.endsWith('3')) {
    suffix = 'rd';
  } else {
    suffix = 'th'
  }
  // console.log('Hi');
  return numString + suffix;
}


console.log(century(2000)         === '20th');        // "20th"
console.log(century(2001)         === '21st');         // "21st"
console.log(century(1965)         === '20th');         // "20th"
console.log(century(256)          === '3rd');          // "3rd"
console.log(century(5)            === '1st');            // "1st"
console.log(century(10103)        === '102nd');        // "102nd"
console.log(century(1052)         === '11th');         // "11th"
console.log(century(1127)         === '12th');         // "12th"
console.log(century(11201)        === '113th');        // "113th"
