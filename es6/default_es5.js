"use strict";

var add = function add(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    return a + b;
};

console.log(add(10, 20)); // 30
console.log(add(10)); // 13
