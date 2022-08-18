console.log('# code snippet 1 ---------------');

// ---------original

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));
//
// function counter(count) {
//   // ...
// }


// ---------hoisted
// function counter(count) {
//   // ...
// }
//
// var rate;
//
// counter = 5;
// rate = 3;
// console.log('The total value is ' + String(counter * rate));  // returns The total value is 15


console.log('# code snippet 2 ---------------');
// ---------original
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));
//
// var counter = 5;
// var rate = 3;

// ---------hoisted

// function counter(count) {
//   // ...
// }
//
// var rate;
//
// console.log('The total value is ' + String(counter * rate)); // The total value is NaN
//
// counter = 5;
// rate = 3;


console.log('# code snippet 3 ---------------');

// ---------original

// var counter = 5;
// var rate = 3;
//
// function counter(count) {
//   // ...
// }
//
// console.log('The total value is ' + String(counter * rate));

// ---------hoisted

// function counter(count) {
//   // ...
// }
//
// var rate;
//
// counter = 5;
// rate = 3;
//
// console.log('The total value is ' + String(counter * rate));  // returns The total value is 15

console.log('# code snippet 4 ---------------');

// ---------original
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// ---------hoisted
// function counter(count) {
//   // ...
// }
//
// counter;
// let rate;
//
// counter = 5;
// rate = 3;
//
// console.log('The total value is ' + String(counter * rate)); // returns The total value is 15
