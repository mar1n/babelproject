"use strict";

var timingpromise = new Promise(function (resolve, reject) {
   setTimeout(function () {
      resolve("Promise is resolved!");
   }, 1000);
});

timingpromise.then(function (msg) {
   console.log(msg);
});
