const digitChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(number) {
  let string = '';

  do {
    let digit = number % 10;
    string = digitChars[digit] + string;

    number = parseInt(number/10);
  } while (number > 0)

  return string;
}

function signedIntegerToString(signedNumber) {
  let sign = '';

  if (signedNumber < 0) {
    sign = '-';
  } else if (signedNumber > 0 ) {
    sign = '+';
  }


  let string = integerToString(Math.abs(signedNumber));
  return sign + string;
}

console.log(signedIntegerToString(4321) );      // "+4321"
console.log(signedIntegerToString(-123) );      // "-123"
console.log(signedIntegerToString(0)    );         // "0"
