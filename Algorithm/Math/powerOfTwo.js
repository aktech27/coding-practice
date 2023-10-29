//Given a positive integer 'n', determine if the number is a power of two or not

function isPowerOfTwo(n) {
    let flag = false;
    for (i = 0; i <= (Math.sqrt(n)) / 2; i++) {
        if (Math.pow(2, i) == n) {
            flag = true;
            break;
        }
    }
    console.log(flag);
}

isPowerOfTwo(1);
isPowerOfTwo(2);
isPowerOfTwo(5);
isPowerOfTwo(256);
isPowerOfTwo(200);
isPowerOfTwo(2048);

//Optimal solution - bitwise AND of a powerOfTwo always returns 0

function optimalSolution(n) {
    let flag = (n & (n - 1)) == 0;
    console.log(flag);
}
optimalSolution(1);
optimalSolution(2);
optimalSolution(5);
optimalSolution(200);
optimalSolution(2048);