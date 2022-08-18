function shift(array) {
  if (array.length <=0 ) {
    return undefined;
  }
  const firstElement = array[0];

  for (let i = 0; i <= array.length - 2; i ++) {
    array[i] = array[i + 1];
  }

  array.length -= 1;

  return firstElement;
}

function unshift(array, ...args) {
  const copyArray = array.slice();

  array.length += args.length;

  const numAddedElements = args.length

  for (let i = 0; i < numAddedElements; i ++) {
    array[i] = args[i];
  }

  let copyIndex = 0
  for (let i = numAddedElements; i < array.length; i ++) {
    array[i] = copyArray[copyIndex];
    copyIndex += 1;
  }

  return array.length;
}



console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
console.log()
console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3
console.log()

const testArray = [1, 2, 3];

console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
