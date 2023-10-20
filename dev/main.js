(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var add = function add(x, y) {
  return x + y;
};
module.exports = add;

},{}],2:[function(require,module,exports){
"use strict";

var _add = _interopRequireDefault(require("./add"));
var _multiply = _interopRequireDefault(require("./multiply"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var a = (0, _add["default"])(10, 20);
var b = (0, _multiply["default"])(40, 10);
console.log("%c" + a, "font-size:30px;color:green;");
console.log("%c" + b, "font-size:30px;color:green;");

},{"./add":1,"./multiply":3}],3:[function(require,module,exports){
"use strict";

var multiply = function multiply(x, y) {
  return x * y;
};
module.exports = multiply;

},{}]},{},[2]);
