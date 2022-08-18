function firstElementOf(arr) {
  return arr[0];
}

let a = firstElementOf(['U', 'S', 'A']);  // returns "U"

console.log(a);

// 2----------------------

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

let b = lastElementOf(['U', 'S', 'A']);  // returns "A"

console.log(b)

// 3--------------------------

function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];
//
// let c = nthElementOf(digits, 3);   // returns 16
// let d = nthElementOf(digits, 8);   // what does this return?
// let e = nthElementOf(digits, -1);  // what does this return?
//
// console.log(c);
// console.log(d);
// console.log(e);
//
// digits[-2] = 'here'
//
// console.log(digits);

// # 5 ------------------------------

// function firstNOf(arr, count) {
//   let newArray = [];
//   for (let i = 0; i < count; i ++) {
//     newArray.push(arr[i]);
//     if (i >= arr.length) {
//       break;
//     }
//   }
//   return newArray;
// }

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// a = firstNOf(digits, 3);    // returns [4, 8, 15]
//
// console.log(a);

// # 6 -------------------------------

// function lastNOf(arr, count) {
//   return arr.slice(-count);
// }
//
// let digits = [4, 8, 15, 16, 23, 42];
// a = lastNOf(digits, 3);    // returns [16, 23, 42]
//
// console.log(a);

// #7 ----------------------

function lastNOf(arr, count) {
  // if (count >= arr.length) {
  //   return arr.slice();
  // }
  return arr.slice(-count);
}

let digits = [4, 8, 15, 16, 23, 42];
a = lastNOf(digits, 3);    // returns [16, 23, 42]

console.log(a);

a = lastNOf(digits, 156);    // returns [16, 23, 42]

console.log(a);

// #8 ------------------------------------

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

a = endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]

console.log(a);
