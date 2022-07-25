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

function multiplesOfThreeAndFive(start = 1, end = 100) {
  for (let i = start; i <= end; i ++) {
    if (multipleOfThreeAndFive(i)) {
      console.log(i + '!');
    } else if (multipleOfThreeOrFive(i)) {
      console.log(String(i));
    }
  }
}


multiplesOfThreeAndFive();
