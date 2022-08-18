// #1 push

function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// #2 pop ----------------------------

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length-1];
  arr.length = arr.length - 1;
  return lastElement;
}

// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]


// #3 unshift ---------------------------

function unshift(array, value) {
  for (let i = array.length; i > 0; i --) {
    array[i] = array[i-1];
  }
  array[0] = value;
  return array.length;
}


// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// # 4 shift ------------------------------------------

function shift(array) {
  let firstElement = array[0];

  if (array.length === 0 ) {
    return undefined;
  }

  for (let i = 1; i < array.length ; i ++ ) {
    array[i -1] = array[i];
  }
  array.length -= 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
