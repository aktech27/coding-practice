// Given a number n, find the nth element of the Fibonacci sequence

function nthFibonacci(n) {
    if (n == 0 || n == 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(6));