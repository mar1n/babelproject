"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var red = 1,
    green = 2,
    blue = 3;
var rgbes5 = {
   red: red,
   green: green,
   blue: blue
};
console.log(rgbes5);

var rgbes6 = {
   red: red,
   green: green,
   blue: blue
};
console.log(rgbes6);

var brand = "carbrand";
var cars = _defineProperty({}, brand, "BMW");
console.log(cars.carbrand);
