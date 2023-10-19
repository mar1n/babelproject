const red = 1, green = 2, blue = 3;
let rgbes5 = {
   red: red,
   green: green,
   blue: blue
};
console.log(rgbes5);

let rgbes6 = {
   red,
   green,
   blue
};
console.log(rgbes6);

let brand = "carbrand";
const cars = {
   [brand]: "BMW"
}
console.log(cars.carbrand);