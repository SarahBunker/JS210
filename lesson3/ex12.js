/*
Goldbach's conjecture
every even natural number greater than 2 is the sum of two prime numbers.

Write a function named checkGoldbach
The function takes as its only parameter, an integer expectedSum, and logs all combinations of two prime numbers whose sum is expectedSum. Log the prime pairs with the smaller number first. If expectedSum is odd or less than 4, your function should log null.

input integer - expectedSum
output  list of all combination of 2 prime numbers that sum to number
  logs smaller prime first
logs null if expectedSum is odd or less then 4

start with 2 , go to expectedSum/2, increment small num
  smallNum = 2
  check if smallNum is prime
    next if not prime
  othernum is subtract smallNum from expectedSum
  check if othernum is prime
    next if not prime
  console log two numbers
*/


function isPrime(number) {
  if ( number <= 1 ) {
    return false
  }

  if ( number % 2 === 0 && number > 2) {
    return false
  }

  for (let index = 2; index <= number / 2; index ++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 == 1) {
    console.log('null');
    return;
  }

  for (let smallNum = 2; smallNum <= expectedSum / 2; smallNum ++ ) {
    if (!isPrime(smallNum)) {
      continue;
    }

    let othernum = expectedSum - smallNum;

    if (!isPrime(othernum)) {
      continue;
    }

    console.log(`${smallNum} ${othernum}`);
  }
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);


// console.log(checkGoldbach(3));
// console.log();
// console.log(checkGoldbach(4));
// console.log();
// console.log(checkGoldbach(12));
// console.log();
// console.log(checkGoldbach(100));
