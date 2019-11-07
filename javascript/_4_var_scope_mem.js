console.log("_4_var_scope_mem");

// Array
let array = ["6", "25", "76", "30", "21", "1", "98", "98", "39", "23"];
array.sort(function (a, b) {
    let left = parseInt(a);
    let right = parseInt(b);
    return left === right ? 0 : (left > right ? 1 : -1);
});
console.log(array);
let allLargeThan50 = array.every(function (value, index, array) {
    return parseInt(value) > 50;
});
console.log(allLargeThan50);
let allLargeThan50Array = array.filter(function (value, index, array) {
    return parseInt(value) > 50;
});
console.log(allLargeThan50Array);
let intArray = array.map(function (value, index, array) {
    return parseInt(value);
});
console.log(intArray);
let intSum = array.reduce(function (prev, cur, index, array) {
    return parseInt(prev) + parseInt(cur);
});
console.log(intSum);

// Date
let _20191107010000 = new Date(2019, 10, 7, 1);
console.log(_20191107010000);
console.log(_20191107010000.toDateString());

// Function
function createSortFunctionByKey(key) {
    return function (a, b) {
        let va = a[key];
        let vb = b[key];

        return va === vb ? 0 : (va > vb ? 1 : -1);
    }
}

let persons = [];
persons.push({name: "Zachary", age: 28});
persons.push({name: "Nicholas", age: 29});
persons.sort(createSortFunctionByKey("age"));
console.log(persons);

function fib(num) {
    if (num <= 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return arguments.callee(num - 2) + arguments.callee(num - 1);
    }
}

console.log(fib.valueOf());

persons[0].fib = fib;
console.log(persons[0].fib(3));


