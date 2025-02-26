// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


/*
Roadmaps.sh considera isso um conditional operator

Conditional operator also known as Ternary operator is the only JS operator that takes three operands.

The operator can have one of two values based on a condition.

Syntax:

condition ? val_for_true : val_for_false
*/