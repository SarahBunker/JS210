console.log('#1--------------------');

// let foo = function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// };
//
// foo(1,2,3);

console.log('#2--------------------');

// let foo = function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// };
//
// foo();


console.log('#3--------------------');

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }
//
// // let { baz, qux, bar } = foo(1, 2, 3);
// let obj = foo(1, 2 ,3);
// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;
// console.log(baz, qux, bar);

console.log('#4--------------------');

// function foo(array) {
//   return [
//     array[2],
//     5,
//     array[1],
//   ];
// }
//
// let array = [1, 2, 3];
// let result = foo(array);
// // let [ bar, qux, baz ] = result;
// let baz = result[0];
// let qux = result[1];
// let bar = result[2];

// console.log(baz, qux, bar);

console.log('#5--------------------');

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }
//
// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);
//
// console.log(result);

console.log('#6--------------------');

// function product() {
//   let args = Array.prototype.slice.call(arguments);
//   return args.reduce((total, number) => total * number);
// }
//
// let result = product(2, 3, 4, 5);
//
//
// console.log(result);

console.log('#7--------------------');

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }


console.log('#8--------------------');

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };
//
// // const { first, second, ...rest } = obj;
// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// };
//
// console.log(first, second, rest);

console.log('#9--------------------');

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }
//
// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

console.log('#10--------------------');

let sugar = function(array) {
  let first = array[0];
  let last = array.slice(array.length - 1)[0];
  let middle = array.slice(1, array.length - 1);
  middle.sort();

  return {
    first,
    last,
    middle,
  };
};

let someArguments = [1, "a", "c", "b", 5];

let { first, last, middle } = sugar(someArguments);

console.log(first);
console.log(last);
console.log(middle);
