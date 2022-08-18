"use strict";

let bar;

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);
