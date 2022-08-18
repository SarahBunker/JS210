// #1

// let a = 'outer';
//
// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }
//
// console.log(a);
// testScope();
// console.log(a);

/*
The output is `outer inner outer`. This is because the variable on line 6 shadows the variable on line 3.
line 6 defines a new variable with block scope. Assigning `a` to `'inner'` is variable initialization, not reassignment. It has visible scope only within the function definition.

`a` on line 10 and 12 references the object `'outer'`. The variable `a` on line 6 is a different variable that
is in an inner scope to these two variable calls.

On line 11 the method `testScope` is invoked. Since JS searches scopes from the bottom scope up, it finds the
variable reference to `'inner'` on line 6 before it finds the one initialized on line 3. This is variable shadowing.
*/

// #2
// let a = 'outer';
//
// function testScope() {
//   a = 'inner';
//   console.log(a);
// }
//
// console.log(a);
// testScope();
// console.log(a);

/*
The output of the code is `outer, inner, inner`. This is because on line 4 we are accessing the global variable and assigning inner to the variable.
This is why line 10 ouputs inner instead of outer.
*/

// let basket = 'empty';
// // basket global scope
//
// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }
//
//   let shop2 = function() {
//     basket = 'computer';
//   };
//
//   const shop3 = () => {
//     let basket = 'play station';
//     // basket function scope
//     console.log(basket);
//   };
//
//   console.log(basket);
//
//   shop1();
//   // basket references 'tv'
//   shop2();
//   // basket references 'computer'
//   shop3();
//   // basket still references 'computer'
//
//   console.log(basket);
// }
//
// goShopping();
//
/*
After hoisting the functions we can see the order the basket is printed to the screen and the order the method calls can affect basket.
The output will be `empty, play station, computer`. This is because on line 8 of the original example `basket` is accessible since line 1 declares a
global variable that is accessible from the inner scope of the method. Line 19 calls shop1 method that
*/

// #4

// function hello() {
//   a = 'hi';
// }
//
// hello();
// console.log(a);

/*
This code will output `hi` because `a` on line 83 is defined as a global variable that is accesible on line 87 after the method is called on line 86.
*/

// #6
// console.log(a);
//
// var a = 1;
/*
This returns undefined. After hoisting the code becomes: Where the variable `a` is declared before line 1. Variables declared with `var` have a value of `undefined` until they are assigned which in this case happens on line 3.
*/

// #7

// console.log(a);
//
// let a = 1;

/*
This code returns an error message saying that `a` is not initialized yet.
`ReferenceError: Cannot access 'a' before initialization`
*/

// #8
// console.log(a);
//
// function hello() {
//   a = 1;
// }

/*
the fuction `hello` is hoisted above the `console.log(a)` statement, but the method is never called so `a` is never initialized. Thuse line 1 raises a refference error.

*/
