// #1----------------------

function oddElementsOf(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

let a = oddElementsOf(digits);    // returns [8, 16, 42]

console.log(a);

// #2------------------------------

// function originalPlusReverse(arr) {
//   let newArray = arr;
//   for (let i = newArray.length - 1; i >= 0; i --) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

function originalPlusReverse(arr) {
  return arr.concat(arr.slice().reverse());
}

let letters = ['a', 'b', 'c'];

console.log(originalPlusReverse(letters));

// #3------------------------------

function sortDescending(arr) {
  let newArray = arr.slice();
  newArray.sort((a,b) => b - a);
  return newArray
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 4 -0----------------------------

console.log('problem 4-----------------------')

function matrixSums(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let total = arr[i].reduce((previousValue, currentValue) => previousValue + currentValue);
    newArray.push(total);
  }
  return newArray;
}

a = matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

console.log(a)

// 5 -------------------------------------

console.log('5 ------------------------------')

function uniqueElements(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i ++ ) {
    if (newArray.includes(arr[i])) {
      continue;
    }
    newArray.push(arr[i]);
  }
  return newArray;
}

a = uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

console.log(a);
