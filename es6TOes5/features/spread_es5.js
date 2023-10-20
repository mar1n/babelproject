"use strict";

var add = function add(a, b, c) {
    return a + b + c;
};
var arr = [11, 23, 3];
console.log(add.apply(undefined, arr));
