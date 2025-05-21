let name = 'Dipali';
console.log(name);

let firstName='Dipali';
let lastName='Nirali';

let interestRate =0.3;
interestRate =1;
console.log(interestRate);

const interestRatee =0.3;
interestRatee =1;
console.log(interestRatee);

// can not re -assign the const, 
// if you want to re-assign use the let.

let name1 = 'Dipali'; // String Literal
let age = 30; // Number Literal
let isApproved = false // boolean Literal
let firstName1 = undefined;
let selectedColor = null;  


/*
Languages :
1. Static (Statically -typed) 
2. Dynamic : (Dynamically-typed) */


// Primitive/Value type :

// String
// Number
// Boolean
// undefined
// null


// Reference Types:

// Object
// Array
// FUnction

let person = {
    name : "Mosh",
    age : 30
};

// Dot notation
person.name = "John";
console.log(person.name);

person['name'] = 'Mary';
console.log(person.name); 

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors[0]);


function greet(name){
    console.log('Hello' +name);
}

greet('John','Smith');
greet('Mary');


