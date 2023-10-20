"use strict";

var numbers = [4, 7, 3, 10];
var a = numbers[Symbol.iterator]();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

var _array = [4, 7, 3, 10];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
   for (var _iterator = _array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;

      console.log(n);
   }
} catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
} finally {
   try {
      if (!_iteratorNormalCompletion && _iterator.return) {
         _iterator.return();
      }
   } finally {
      if (_didIteratorError) {
         throw _iteratorError;
      }
   }
}
