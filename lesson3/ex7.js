/*
loop through 2 to the number divided by 2
return false if the number devided by index is 0

end of loop return true
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

console.log(isPrime(1)  === false);
console.log(isPrime(2)  === true);
console.log(isPrime(3)  === true);
console.log(isPrime(4)  === false);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0)  === false);
isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
