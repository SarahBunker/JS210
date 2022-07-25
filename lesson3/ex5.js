function odd(num) { return num % 2 === 1 };

function checkMultiple(num, divisor) { return num % divisor === 0 };

// function logMultiples (divisor) {
//   for (let i = 100; i >= 0; i --) {
//     if ( odd(i) && checkMultiple(i, divisor)) {
//       console.log(i);
//     }
//   }
// }

function logMultiples(number) {
  largestMultiple = Math.floor(100/number) * number
  for (let canidate = largestMultiple; canidate > 0 ; canidate -= number) {
    if (canidate % 2 === 1) {
      console.log(canidate);
    }
  }
}

logMultiples(17);

logMultiples(21);
