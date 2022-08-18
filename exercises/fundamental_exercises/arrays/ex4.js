function concat(...args) {

  function convertToArray (item) {
    if (!Array.isArray(item)) {
      item = [item];
    }
    return item;
  }

  let newArray = [];

  for (let i = 0; i < args.length; i ++) {
    let currentArray = convertToArray(args[i]);
    for (let i = 0; i < currentArray.length; i ++) {
      newArray.push(currentArray[i]);
    }
  }

  return newArray;
}


let a = concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
let c = concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]


console.log(a);
console.log(b);
console.log(c);
