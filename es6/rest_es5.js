"use strict";

var add = function add() {
   for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
   }

   var sum = 0;
   args.forEach(function (n) {
      sum += n;
   });
   return sum;
};

console.log(add(1, 2)); // 3
console.log(add(1, 2, 5, 6, 6, 7)); //27
