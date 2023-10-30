//? Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time

//* When n=1, Count=1 | (1)
//* When n=2, Count=2 | (1,1) and (2)
//* When n=3, Count=3 | (1,1,1) and (2,1) and (1,2)
//* When n=4, Count=5 | (1,1,1,1) and (1,2,1) and (1,1,2) and (2,1,1) and (2,2)

//! Pattern is fibonacci

function distinctWays(n) {
    if (n == 1 || n == 2) {
        return n
    }
    return distinctWays(n - 1) + distinctWays(n - 2);
}

console.log(distinctWays(3));
console.log(distinctWays(4));
console.log(distinctWays(5));
console.log(distinctWays(6));
console.log(distinctWays(7));