// #1

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
// ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
// dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
// ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
// diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
// hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';
//
// console.log(paragraph);

// I didn't notice the extra spaces after the `\` because my code editor is set to strip trailing whitespace.
// this extra white space will cause a syntax error.

// #2

// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';
//
// if (myBoolean) {
//   console.log('Hello');
// }
//
// if (!myString) {
//   console.log('World');
// }
//
// if (!!myArray) {
//   console.log('World');
// }
//
// if (myOtherString || myArray) {
//   console.log('!');
// }


// # 3

// if (condition1) {
//   // ...
//   if (condition2) {
//     // ...
//   } else {
//     // ...
//   }
// } else {
//   // ...
//   if (condition4) {
//     // ...
//     if (condition5) {
//     // ...
//     }
//   }
// }

// #4

// const name = 'Bob';
// const saveName = name;
// name = 'Alice';
// console.log(name, saveName);
// // Alice Bob

// let name = 'Bob';
// const saveName = name;
// name.toUpperCase();
// console.log(name, saveName);
// // Bob Bob

/*
In the first example `name` and `saveName` point to the same object on line 61. On line 62 `name` is reassigned to `'Alice'`.
This is why line 63 outputs different values for `name` and `saveName`.

In the first example `name` and `saveName` point to the same object on line 67.
On line 68 the nonmutating method `#toUpperCase` is called on the object referenced by `name`.
This method is nonmutating and the result is not saved anywhere. So on line 69 both `name` and `saveName` refer to `'Bob'`.

Also it is not significant that `name` was declared a `const` instead of using `let`.
This just prevents it from being reassigned if we wanted to modify they code.
 */
