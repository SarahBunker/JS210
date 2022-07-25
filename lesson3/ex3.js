// function logOddNumbers(num) {
//   let numOut = 1;
//   while (numOut <= num) {
//     console.log(numOut);
//     numOut += 2;
//   }
// }

function logOddNumbers(num) {
  for (let currentNum = 1; currentNum <= num; currentNum += 2) {
    console.log(currentNum);
  }
}

logOddNumbers(19);
