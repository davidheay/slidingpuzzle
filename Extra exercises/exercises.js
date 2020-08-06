// with let ... Identifier 'fib' has already been declared ???
// validation
var fib = n => {
    if (n > 0)
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    else
        return 0;
};
// short
var fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2);

const sqrRoot = (num, temp = 1) => temp * temp <= num ? sqrRoot(num, ++temp) : --temp;

const allCaps = text => text.split('').map(item => item.toUpperCase());




