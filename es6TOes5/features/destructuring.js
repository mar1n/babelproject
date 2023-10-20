let x, y, rem;
[x, y] = [10, 20];

console.log(x);
console.log(y);
[x, y, ...rem] = [10, 20, 30, 40, 50];
console.log(rem);

let z = 0;
({ x, y } = (z) ? { x: 10, y: 20 } : { x: 1, y: 2 });
console.log(x);
console.log(y);