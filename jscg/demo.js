const string = "Hello World!";
console.log(string);

function fib(count) {
  let x = 0;
  let y = 1;
  let z = 0;
  while (count--) {
    z = x;
    x += y;
    y = z;
    console.log(x);
  }
}

fib(10);
