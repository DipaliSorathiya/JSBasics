1. Variable Declarations
let → Allows you to declare re-assignable variables.

const → Used to declare constants that cannot be re-assigned.

javascript
Copy
Edit
let name = 'Dipali';
name = 'Nirali'; //  Allowed

const interestRate = 0.3;
interestRate = 1; //  Error: Assignment to constant variable
Tip: Use let when the value may change, use const when it should stay constant.

2. JavaScript is Dynamically Typed
Variable types are determined at runtime.

No need to specify the data type explicitly.

javascript
Copy
Edit
let age = 30; // Number
age = 'thirty'; // Now a String - JavaScript allows this
3. Primitive (Value) Types
These hold actual values:

String → e.g., 'Dipali'

Number → e.g., 30

Boolean → e.g., true, false

undefined → variable declared but not assigned

null → explicitly represents "no value"

javascript
Copy
Edit
let name = 'Dipali'; // String
let age = 30;        // Number
let isApproved = false; // Boolean
let firstName;       // undefined
let selectedColor = null; // null
4. Reference Types
These hold references (addresses in memory):

Objects

Arrays

Functions

 Object Example:
javascript
Copy
Edit
let person = {
    name: 'Mosh',
    age: 30
};

// Access & modify using:
person.name = 'John'; // Dot notation
person['name'] = 'Mary'; // Bracket notation

console.log(person.name); // Mary
Array Example:
javascript
Copy
Edit
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors[0]); // red
console.log(selectedColors);    // ['red', 'blue', 'green']
5. Functions
Functions are reusable blocks of code:

javascript
Copy
Edit
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith'); // Hello John Smith
greet('Mary'); // Hello Mary undefined
Note: If an argument is missing, it becomes undefined.

6. Quick Tip: Language Types
Statically Typed → You must declare types (e.g., Java, C++)

Dynamically Typed → Types are decided at runtime (JavaScript)
