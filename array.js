//array - collection of data and effient management and organization
//1 ordered collection
//crud - create, read, update, delete
//2 syntaxes
//create an array
//literal
const student = []
//const teachers = teachersOfMoringa();
let fruits = new Array('mango', 'banana', 'orange', 'apple', 'grape', 'watermelon');

console.log(fruits);

//length of an array
console.log(fruits.length);
//indices start from 0
//we know how to derieve the last index of an array

//how can we get the last iem in an array
console.log(fruits[fruits.length - 1]);

//what do you think will happen if we try to access an index that is not in the array
console.log(fruits[fruits.length]); //undefined


const fruits2 = ['mango', 'banana', 'orange', 'apple', 'grape', 'watermelon'];

//for loop
for(let i = 0; i < fruits2.length; i++){
    console.log(fruits2[i].toUpperCase);
}

