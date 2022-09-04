//recursive fibonnaci

function recursiveFibonnaci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonnaci(n - 1) + recursiveFibonnaci(n - 2);
}

// console.log(recursiveFibonnaci(0));
// console.log(recursiveFibonnaci(3));
// console.log(recursiveFibonnaci(6));
// console.log(recursiveFibonnaci(10));

//Recursive factorial

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(3));
// console.log(recursiveFactorial(5));
// console.log(recursiveFactorial(10));

function Fibo(n) {
  if (n < 2) {
    return n;
  }
  let sum = 0;
  let last = 1;
  let lastlast = 0;

  for (i = 1; i < n; i++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  }
  return sum;
}

console.log("second", Fibo(40));
console.log("first", recursiveFibonnaci(40));
// console.log(Fibo(3));
