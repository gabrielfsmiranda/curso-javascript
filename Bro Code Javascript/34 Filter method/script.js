// .filter() = creates a new array by filtering out
//                 elements with a callback

// ---------- EXAMPLE 1 ----------
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

/*
O método filter pega um statement, passa pelo array e cria um array novo com os elementos que passarem como true pelo teste

.filter(callback)
*/


//ages example

const ages = [16, 17, 18, 18, 19, 20, 60];

function isAdult(element){
    return element >= 18;
}

const adults = ages.filter(isAdult);
console.log(adults);


function isChild(element){
    return element < 18;
}

const children = ages.filter(isChild);
console.log(children);


//words example

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element){
    return element.length <=6;
}

function getLongWords(element){
    return element.length >6;
}

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);