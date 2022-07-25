/*
Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. For example, if nStars is 7, log the following pattern:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

You may assume that nStars is greater than 1 and less than 10.

---------
exploring JS functions
----------------
array method join, creates a new string with elements joined by ',' or by separator provided as an argument.
Filling an array with an intial value
var arr = Array(arraySize).fill(value);
  if the value is an object it will fill the array with the same instance of the object.
better performance
while(size--) array[size] = value;
------------

initialize an array of * with length equal to the nStars
set index to 0
loop until index equals nStars
  replace value in array at index with the number (index + 1)
  output the array combined into a string
  increment index
*/

// This solution doesn't work if you want it to stay rectangle when nRows is greater then 9
// function generatePattern(nStars) {
//   let arr = Array(nStars).fill('*');
//   for (let index = 0; index < nStars; index ++) {
//     arr[index] = index + 1;
//     row = arr.join('');
//     console.log(row);
//   }
//   console.log();
// }

// Adjusting solution to generate strings as you iterate.
function generatePattern(nRows) {
  let nChars = 0;
  for (let row = 1; row <= nRows; row ++) {
    strLength = String(row).length;
    nChars += strLength;
  }

  for (let row = 1; row <= nRows; row ++ ) {
    let str = '';
    let nStars = 0;

    for (let index = 1; index <= row; index ++ ) {
      str = str.concat(String(index));
    }

    nStars = nChars - str.length;

    for (let index = 0; index < nStars; index ++ ) {
      str = str.concat('*');
    }

    console.log(str);
  }
  console.log();
}

generatePattern(7);

generatePattern(10);

generatePattern(1);

generatePattern(20);
