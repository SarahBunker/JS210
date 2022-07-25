function multipleOfThree(num) {
  return num % 3 === 0;
}

function multipleOfFive(num) {
  return num % 5 === 0;
}

function multipleOfThreeAndFive(num) {
  return multipleOfThree(num) && multipleOfFive(num);
}

function multipleOfThreeOrFive(num) {
  return multipleOfThree(num) || multipleOfFive(num);
}

function fizzbuzz(start = 1, end = 100) {
  for (let index = start; index <= end; index ++) {
    let message = index
    if (multipleOfThreeAndFive(index)) {
      message = "FizzBuzz"
    } else if (multipleOfThree(index)) {
      message = "Fizz"
    } else if (multipleOfFive(index)) {
      message = "Buzz"
    }

    console.log(message);
  }
}

fizzbuzz();
