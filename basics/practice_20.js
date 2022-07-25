// let counter = 0;
// let limit = 10;
//
// function counting_function() {
//   console.log('hi');
//   return counter < limit
// }
//
// while (counting_function()) {
//   console.log(counter);
//   counter += 2;
// }

let counter = 0;
let limit = 10;

while (true) {
  counter += 2;
  if (counter > limit) {
    break;
  }

  console.log(counter);
}
