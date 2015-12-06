


function fib(n) {
  if (n <= 2) return 1;
  return fib(n-2) + fib(n-1);
}

function fib2(values, n) {
    console.log(values);
    if (n == 2) {
      return [1,1];
    }
    return (fib2(values, n-1));
}

console.log(fib2([], 10));
//console.log(fib(10));
