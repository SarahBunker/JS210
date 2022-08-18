/*
Fibonacci Number Location by Length
Fibonacci: first two numbers are 1, each subsequent number is the sum of the two previous numbers

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

inputnumdigits
output index of first Fibonacci number that has that number of digits

initialize index to 3
initialize prevNum to 1
initialize currNum to 1
initialize nextNum to 0
increment after each loop
iterate
  nextNum is prevNum plus currNum

  convert currNum to string
  if length of currNum is equal to numDigits
    return index

  prevNum is currNum
  currNum is nextNum
  increment index
*/

function findFibonacciIndexByLength(numDigits) {
  let prevNum = 1n;
  let currNum = 1n;
  let nextNum = 0n;

  for (let index = 3n; ; index += 1n) {
    nextNum = prevNum + currNum;
    if (String(nextNum).length >= numDigits) {
      // console.log(index);
      return index;
    }

    prevNum = currNum;
    currNum = nextNum;
  }
}

// function findFibonacciIndexByLength(length) {
//   let first = 1n;
//   let second = 1n;
//   let count = 2n;
//   let fibonacci;
//
//   do {
//     fibonacci = first + second;
//     count += 1n;
//     first = second;
//     second = fibonacci;
//   } while (String(fibonacci).length < length);
//   console.log(count);
//   return count;
// }

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
