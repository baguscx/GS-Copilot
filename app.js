//make function sum
function sum(a, b) {
    return a + b;
}
sum(1, 2); // 3

//function isprime
function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}