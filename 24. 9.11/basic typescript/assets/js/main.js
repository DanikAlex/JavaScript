let age;
age = 19;
let username;
username = 'Daniel';
let isStudent;
isStudent = true;
let value;
value = 9;
value = 'Value';
// value = true; //error
// objects
let kitten;
kitten = { name: 'Mitzy', age: 4 };
// kitten = { name: 'Mitzy', age: 4 , isSiamese: false}; // error
// kitten = { name: 'kitzy' } // error
console.log(kitten.name);
// console.log(kitten.color); // error
// kitten = { name: 'asi', age = 'four' } // error
// arrays
let grades;
grades = [1, 2, 3];
// grades = 1; //error
// grades = ['','']; // error
// grades = new Set(); // error
// functions
function doSomething(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    // return 1; // error
}
// doSomething(); // error
// doSomething(true, 'aaa', 1); // error
doSomething(1, 'aaa', true);
function calcSomething(a, b) {
    return a + b;
}
// const sum: string = calcSomething(1, 1); // error
const sum = calcSomething(1, 1);
const someNewVar = calcSomething(1, 1);
const someConst = doSomething(1, '', true);
console.log('hello');
import { plus } from './calc.js';
const result = plus(1, 2);
console.log(result);
