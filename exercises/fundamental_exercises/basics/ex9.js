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

console.log(integerToString(4321) );      // "4321"
console.log(integerToString(0)    );         // "0"
console.log(integerToString(5000) );      // "5000"
