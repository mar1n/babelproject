"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function () {
   function Student(fname, lname, age, address) {
      _classCallCheck(this, Student);

      this.fname = fname;
      this.lname = lname;
      this.age = age;
      this.address = address;
   }

   _createClass(Student, [{
      key: "fullname",
      get: function get() {
         return this.fname + "-" + this.lname;
      }
   }]);

   return Student;
}();
