const rlsync = require('readline-sync');

function sumConsectiveNumbers(endNumber) {
  let total = 0;

  for (let i = 1; i <= endNumber; i ++ ) {
    total += i
  }

  return total
}

function multConsectiveNumbers(endNumber) {
  let total = 1;

  for (let i = 1; i <= endNumber; i ++ ) {
    total *= i
  }

  return total
}

// console.log(sumConsectiveNumbers(5));
// console.log(multConsectiveNumbers(6));
function consecutiveNumbers() {
  // const endNumber = rlsync.question('Please enter an endNumber greater than 0: ');
  // const commandShort = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product.');
  const endNumber = 5;
  const commandShort = 's';

  const commandLong = '';
  let total = 0;

  if (command === 'p') {
    total = multConsectiveNumbers(endNumber);
    commandLong = 'product';
  } else if (command === 'c') {
    total = sumConsectiveNumbers(endNumber);
    commandLong = 'sum';
  }
  // switch (command) {
  //   case 'p':
  //     total = multConsectiveNumbers(endNumber);
  //     commandLong = 'product';
  //     break;
  //   case 'c':
  //     total = sumConsectiveNumbers(endNumber);
  //     commandLong = 'sum';
  //     break;
  // }

  console.log(`The ${commandLong} of the integers between 1 and ${endNumber} is ${total}.`)
}

consecutiveNumbers();
