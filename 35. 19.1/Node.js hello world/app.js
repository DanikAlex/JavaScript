// console.log("hello world");

// let sum = 0;

// for(let i=2; i <= 9; i++){
//     sum += i;
// }

// console.log(sum);

// const calc = require('./calc');
const { mul, add } = require('./calc');

const price = 100;
const vat = 1.17;
const absoluteVat = 17;
const total = mul(price, vat);
const total2 = add(price, absoluteVat);
console.log(total);
console.log(total2);

const os = require('os');
console.log(os.freemem());
console.log(os.userInfo().username);
console.log(os.homedir());

const colors = require('colors');
console.log(colors.green('this is a green text'));