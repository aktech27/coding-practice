function fibonacci(n) {
    let arr = [0, 1];
    for (i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log(arr);
}

fibonacci(2);
fibonacci(3);
fibonacci(7);
