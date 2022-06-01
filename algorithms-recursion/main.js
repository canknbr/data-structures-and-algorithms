function findFactorialRecursive(num) {
  return num === 1 ? 1 : num * findFactorialRecursive(num - 1);
}
function findFactorialIterative(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function fibonacciRecursive(num) {
  if (num <= 1) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}
function fibonacciItarative(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
}

function reverseStringRecursive(str) {
  if (str.length <= 1) return str;
  return reverseStringRecursive(str.slice(1)) + str[0];
}