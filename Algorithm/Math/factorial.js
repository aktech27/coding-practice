function factorial(n) {
    let total = 1;
    for (i = n; i >= 2; i--) {
        total = total * i;
    }
    console.log(total);
}

function recursiveFactorial(n) {
    if (n == 0 || n == 1) return 1;
    return n * recursiveFactorial(n - 1);
}

factorial(0);
factorial(4);
factorial(5);
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));