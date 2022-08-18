const digits = {'0': 0,
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '6': 6,
                '7': 7,
                '8': 8,
                '9': 9,
}

function stringToInteger(string) {
  let number = 0;
  let place = 1;
  for (let i = string.length - 1; i >= 0; i -- ) {
    char = string[i]
    number = number + charToDigit(char) * place;
    place *= 10;
  }
  return number;
}

function charToDigit(char) {
  return digits[char];
}

function stringToSignedInteger(string) {
  let sign = 1;

  let stringArray  = string.split('');
  if (stringArray[0] === '+') {
    stringArray.shift();
  }

  if (stringArray[0] === '-') {
    stringArray.shift();
    sign = -1;
  }
  string = stringArray.join('');

  return sign * stringToInteger(string);
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
