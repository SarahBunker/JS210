function indexOf(array, value) {
  for (let i = 0; i < array.length; i ++ ) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1
}

function lastIndexOf(array, value) {
  let foundIndex = -1
  for (let i = 0; i < array.length; i ++ ) {
    if (value === array[i]) {
      foundIndex = i;
    }
  }
  return foundIndex
}

console.log(indexOf      ([1, 2, 3, 3], 3));         // 2
console.log(indexOf         ([1, 2, 3], 4));            // -1
console.log(lastIndexOf  ([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf     ([1, 2, 3], 4));        // -1
