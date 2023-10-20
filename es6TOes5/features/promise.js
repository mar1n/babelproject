let timingpromise = new Promise((resolve, reject) => {
    setTimeout(function() {
       resolve("Promise is resolved!");
    }, 1000);
 });
 
 timingpromise.then((msg) => {
    console.log(msg);
 });