function doSomethingFunny() {
    if (arguments.length === 1) {
        console.log(arguments[0] + 1);
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }
}

doSomethingFunny(1);
doSomethingFunny(1, 3);

function howManyArgs() {
    console.log(arguments.length);
}

howManyArgs('string', 45);
howManyArgs();
howManyArgs(12);
