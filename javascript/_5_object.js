let caller = function (func, args) {
    return func(args);
};

function add10(num) {
    return num + 10;
}

console.log(caller(add10, 10));
let num = 10;
console.log(num.toFixed(2));

