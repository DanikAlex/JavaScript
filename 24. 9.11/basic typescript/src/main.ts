let age: number;
age = 19;

let username: string;
username = 'Daniel';

let isStudent: boolean;
isStudent = true;

let value: number | string;
value = 9;
value = 'Value';
// value = true; //error

// objects
let kitten: { name: string; age: number };
kitten = { name: 'Mitzy', age: 4 };
// kitten = { name: 'Mitzy', age: 4 , isSiamese: false}; // error
// kitten = { name: 'kitzy' } // error
console.log(kitten.name);
// console.log(kitten.color); // error
// kitten = { name: 'asi', age = 'four' } // error

// arrays

let grades: number[];
grades = [1,2,3];
// grades = 1; //error
// grades = ['','']; // error
// grades = new Set(); // error

// functions
function doSomething(a: number, b: string, c: boolean): void{
    console.log(a);
    console.log(b);
    console.log(c);
    // return 1; // error
}

// doSomething(); // error
// doSomething(true, 'aaa', 1); // error
doSomething(1, 'aaa', true);

function calcSomething(a: number, b: number): number {
    return a + b;
}

// const sum: string = calcSomething(1, 1); // error
const sum: number = calcSomething(1, 1);

const someNewVar = calcSomething(1, 1);

const someConst = doSomething(1, '', true);

console.log('hello');

import { plus } from './calc.js';
const result = plus(1, 2);
console.log(result);
