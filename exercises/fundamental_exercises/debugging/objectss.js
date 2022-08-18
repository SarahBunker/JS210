// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };
//
// console.log(person.name);
// console.log(person["name"]);

console.log('#3--------------------------');

// let myArray = {
//   0: 'A',
//   1: 'B',
//   2: 'C',
//   length: 3,
// };
//
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

console.log('#4--------------------------');

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
//
// let newArray = Object.keys(obj).map((element) => element.toUpperCase());
// console.log(newArray);
// console.log(obj);

console.log('#5--------------------------');

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
//
// let myObj = Object.create(myProtoObj);
//
// myObj[1] = "A";
// myObj[2] = 'B';
//
// console.log(myProtoObj);
// console.log(myObj);

console.log('#6--------------------------');

// "foo"   // primitve
// 3.1415  // primitve
// [ 'a', 'b', 'c' ]   // object
// false  // primitve
// foo   // neither
// function bar() { return "bar"; }   // object
// undefined   // primitve
// { a: 1, b: 2 }   // object

console.log('#7--------------------------');

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };
//
// let myObj = Object.create(myProtoObj);
//
// myObj[qux] = 'qux';
//
// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });
//
// for (let key in myObj) {
//   console.log(key);
// }


console.log('#8--------------------------');

// let copyObj = function(objToCopy, keysToCopy = Object.keys(objToCopy)) {
//   let objCopy = {};
//   let keys = Object.keys(objToCopy);
//
//   keys.forEach( function(propertyName) {
//     if (!keysToCopy.includes(propertyName)) return;
//     objCopy[propertyName] = objToCopy[propertyName];
//   });
//
//   return objCopy;
// };
//
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };
//
// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
//
// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }
//
// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }


console.log('#9--------------------------');

// let foo = {
//   a: 'hello',  // changed to 'hi' on line 126 > 122
//   b: 'world',
// };
//
// let qux = 'hello';
//
// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi'; // this is reassiging the parameter. qux still refers to `hello`
// }
//
// bar(foo, qux);
//
// console.log(foo.a);
// console.log(qux);


console.log('#10--------------------------');

// [1, 2, ["a", ["b", false]], null, {}]

// primitive
// 1, 2, 'a', 'b', false, null

// objects
// [1, 2, ["a", ["b", false]], null, {}]
// ["a", ["b", false]]
// ["b", false]
// {}


console.log('#11--------------------------');

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj['bar'][3]['xyz'] = 606;

console.log(obj);
