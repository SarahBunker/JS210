// # 1 slice --------------------

function slice(array, startIndex, endIndex) {
  let newArray = [];
  for (let i = startIndex; i < endIndex; i ++ ) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// # 2 splice ------------------------

function splice(array, startIndex, numValuesRemove) {
  const arrayLength = array.length;
  const newLength = arrayLength - numValuesRemove;
  const slicedValues = slice(array, startIndex, startIndex + numValuesRemove );

  for (let i = startIndex; i < newLength; i ++ ) {
    array[i] = array[i + numValuesRemove];
  }

  array.length = newLength;

  return slicedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]


// #3 concat

function concat(arr1, arr2) {
  let newArray = arr1;
  for (let i = 0; i < arr2.length; i ++ ) {
    newArray.push(arr2[i]);
  }
  return newArray
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


// #4 join

function join(array, separator) {
  let str = '';
  for (let i = 0; i < array.length; i ++ ) {
    str += String(array[i]);
    if (i === array.length - 1) {
      separator = '';
    }
    str += separator;
  }
  return str;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
