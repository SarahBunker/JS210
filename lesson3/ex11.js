/*
create a function that computes the Greatest Common Divisor of two positive integers
find the smallest number of the two inputs
take the smallest number
iterate from that number down to 1
  check if number is Divisor of smallest number
    check if number is divisor of largest number
      return that number
*/

function gcd(num1, num2) {
  let smallNum = ((num1 >= num2) ? num2 : num1);
  let largNum = ((num1 >= num2) ? num1 : num2);

  for (let index = smallNum; index >= 1; index --) {
    if (smallNum % index === 0 && largNum % index === 0 ) {
      return index;
    }
  }
}

console.log(gcd(12,4));
console.log(gcd(15,10));
console.log(gcd(9,2));
