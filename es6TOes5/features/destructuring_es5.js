"use strict";

var x = void 0,
    y = void 0,
    rem = void 0;
x = 10;
y = 20;


console.log(x);
console.log(y);
x = 10;
y = 20;
rem = [30, 40, 50];

console.log(rem);

var z = 0;

var _ref = z ? { x: 10, y: 20 } : { x: 1, y: 2 };

x = _ref.x;
y = _ref.y;

console.log(x);
console.log(y);
