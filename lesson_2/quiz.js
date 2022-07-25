console.log(1);
console.log(foo());

function foo() {
  console.log(4);
  console.log('Waiting for bar!');
}

function foo() {
  console.log(8);
  console.log(foo);
  function bar() {
    console.log(10);
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log(16);
    console.log('bar again and again');
  }
}
