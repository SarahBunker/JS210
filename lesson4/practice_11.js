// function missing(array) {
//   let newArray = [];
//
//   for (let i = 0; i < array.length - 1; i ++) {
//     let currentValue = array[i];
//     while (array[i + 1] !== currentValue + 1 ) {
//       newArray.push(currentValue + 1);
//       currentValue += 1;
//     }
//   }
//
//   return newArray;
// }

function missing(array) {
  let newArray = [];
  const letStartRange = array[0];
  const letEndRange = array[array.length - 1]

  for (let i = letStartRange + 1; i < letEndRange; i++) {
    if (array.includes(i)) {
      continue;
    }
    newArray.push(i);
  }

  return newArray;
}

let a = missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
let b = missing([1, 2, 3, 4]);                    // []
let c = missing([1, 5]);                          // [2, 3, 4]
let d = missing([6]);                             // []

console.log(a);
console.log(b);
console.log(c);
console.log(d);
