let handler = {
    get: function (target, name) {
       return name in target ? target[name] : "invalid key";
    }
 };
 
 let o = {
    name: 'Siya Kapoor',
    addr: 'Mumbai'
 }
 
 let a = new Proxy(o, handler);
 console.log(a.name);
 console.log(a.addr);
 console.log(a.age);