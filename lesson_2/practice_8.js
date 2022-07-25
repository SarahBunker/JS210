// #1

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
The output is `outer inner outer`. This is because the variable on line 6 shadows the variable on line 3.
line 6 defines a new variable with block scope. Assigning `a` to `'inner'` is variable initialization, not reassigment. It has visible scope only within the function definition.

`a` on line 10 and 12 references the object `'outer'`. The variable `a` on line 6 is a different variable that
is in an inner scope to these two variable calls.

On line 11 the method `testScope` is invoked. Since JS searches scopes from the bottom scope up, it finds the
variable reference to `'inner'` on line 6 before it finds the one initialized on line 3. This is variable shadowing.
*/
