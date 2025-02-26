// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
   
hello("Bro", 25);

/*
const hello = (name) => console.log(`Hello ${name}`);

hello("Bro");

se tiver só um statement, não precisa das chaves


sem arrow function:
function hello(){
    console.log("Hello");
}

hello();
*/


  
// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
                  console.log("Goodbye");}, 3000);

//mais uma vez.. se tivesse só um parâmetro, não precisaria das chaves

/*
setTimeout(callback, timeInMiliseconds)

sem arrow function:
setTimeout(function hello(){
    console.log("Hello");
}, 3000);

assim tb funciona sem nome na função:
setTimeout(function(){
    console.log("Hello");
}, 3000);

*/

// ---------- EXAMPLE 3 ----------               
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(evenNums);

/*
soma = numbers.reduce((x,y) => x + y)
console.log(soma)

isso foi eu q fiz.. tenho q rever as propriedades dos métodos map(), filter() e reduce()
*/

/*
.map(callback)

.filter(callback?).. parece q essa é pra retirar itens de array...se tiver mais de um parâmetro, precisa usar return, se não, nem precisa (igual no exemplo q não tem return)???? tem como botar mais de um parametro no filter???

tb tenho q entender o método reduce..
*/