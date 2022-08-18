function concat(array1, secondArgument) {
  if (!Array.isArray(secondArgument)) {
    secondArgument = [secondArgument];
  }

  let newArray = [];

  for (let i = 0; i < array1.length; i ++) {
    newArray.push(array1[i]);
  }

  for (let i = 0; i < secondArgument.length; i ++ ) {
    newArray.push(secondArgument[i]);
  }

  return newArray;
}

let a = concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
let b = concat([1, 2], 3);                     // [1, 2, 3]
let c = concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
let d = concat([2, 3], 'four');                // [2, 3, "four"]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log();

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
let e = newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
let f = newArray;                              // [2, 3, { a: "two", b: 3 }]

console.log(e);
console.log(f);
console.log();


const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
let g = arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
let h = arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
let i = obj;                                   // { a: "two", b: 3 }



console.log(g);
console.log(h);
console.log(i);
