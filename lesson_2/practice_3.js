function startle() {
  console.log('Yikes!');
}

startle();
// logs: Yikes!

let surprise = startle;
surprise();
// logs: Yikes!

startle();
// logs: Yikes!

function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

takeTwo(1, 2); // logs 1, 2, 3
takeTwo(1); // logs 1, undefined, and NaN
takeTwo(1, 2, 4); // logs 1, 2, 3

console.log();
//----------------------------------\
//#1

function sum(values) {
  let total = 0;
  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }
  return total;
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([2,3,4,5,6]));

let temperatures = [77, 66, 25, 18, 32];
let avgTemp = average(temperatures);
console.log(avgTemp);

average = 3;
console.log(average);




var hello = function () {
  return 'hello world';
};

console.log(hello());
