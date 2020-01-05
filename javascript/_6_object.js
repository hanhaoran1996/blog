'use strict';

(function () {
    function Parent(name) {
        this.name = name;
        this.colors = ['red', 'green', 'blue'];
    }
    Parent.prototype.showName = function () {
        console.log(this.name);
    };

    function Child(name, age) {
        Parent.call(this, name);
        this.age = age;
    }
    Child.prototype = new Parent();
    Child.prototype.showAge = function () {
        console.log(this.age);
    };

    let child = new Child('John', 28);
    child.colors.push('yellow');
    console.log(child.colors);
    child.showName();
    child.showAge();
    child = new Child('Greg', 12);
    console.log(child.colors);
})();
