//function declaration = define a reusable block of code
//                       that performs a specific task

// function hello(){
//     console.log("Hello");
// }


// function expressions = a way to define functions as
//                                          values or variables

/*
Function expressions are often used on:
1. Callbacks in asynchronous operations
2. Higher-Order Functions
3. Closures
4. Event Listeners
*/

// const hello = function(){
//     console.log("Hello");
// }

// hello();

// setTimeout(callback, 3000);
// setTimeout(hello, 3000);

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

/*
setTimeout(() => console.log("Hello"), 3000)
fiz isso aqui só pra provar que entendi arrow functions kkk
*/

const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function square(element){
//     return Math.pow(element, 2);
// });
// não precisa botar nome na função que oassa como valor/variável.. menos poluição.. não polui o global name space

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

// no cubes, o bro code faz a função separada como callback, dps passa como function expression.. dps tira o nome e fica só o function e a função em seguida

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);