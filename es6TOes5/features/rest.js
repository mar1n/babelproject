let add = (...args) => {
    let sum = 0;
    args.forEach(function (n) {
       sum += n;
    });
    return sum;
 };
 
 console.log(add(1, 2));    // 3
 console.log(add(1, 2, 5, 6, 6, 7));   //27