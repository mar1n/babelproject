'use strict';

var handler = {
   get: function get(target, name) {
      return name in target ? target[name] : "invalid key";
   }
};

var o = {
   name: 'Siya Kapoor',
   addr: 'Mumbai'
};

var a = new Proxy(o, handler);
console.log(a.name);
console.log(a.addr);
console.log(a.age);
