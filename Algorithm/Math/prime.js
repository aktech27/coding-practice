function isPrime(number) {
    let flag = true;
    for (i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    console.log(flag);
}

isPrime(5);
isPrime(6);
isPrime(13);
isPrime(7817);

//Optimal solution - When n=a*b, one of the two factors 'a' or 'b' will be less than or equal to square root of 'n'
function optimalSolution(number) {
    let flag = true;
    for (i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    console.log(flag);
}