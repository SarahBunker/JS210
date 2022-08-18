const rlsync = require('readline-sync');

function tipCalculator() {
  let bill = Number(rlsync.question('What is the bill? '));
  let tipPercent = Number(rlsync.question('What is the tip percentage? '));

  const tip = (bill * tipPercent / 100)
  const total = (tip + bill).toFixed(2);

  console.log();
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total}`);
}

tipCalculator();
