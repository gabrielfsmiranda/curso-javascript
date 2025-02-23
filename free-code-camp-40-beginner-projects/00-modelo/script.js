/*
const person = {};
person.name = 'Gabriel';
person.surname = 'Miranda';
person.fullname = function(){
    return this.name + ' ' + this.surname
};

console.log(person.fullname());
console.log(person.fullname)
*/

/*
const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruta, qual] of Object.entries(fruits)) {
  text += fruta + ": " + qual + "<br>";
}

document.getElementById("demo").innerHTML = text;
*/

// não importa os nomes q vc coloque apos let [x,y], contanto q sejam 2 nomes.. essa função vai fazer loop q percorre todo objeto pegando propriedade e valor...

/*
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
alert(Object.values(fruits))

esse só mostra os valores
*/

/*
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

myCar = new Car('Gol 1.6', 2018)

console.log(myCar)

console.log(myCar.age())
*/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

/*
podia substituir as duas linhas de cima por
let year = new Date().getFullYear();
*/

const myCar = new Car("Gol 1.6", 2018);

console.log("My car is " + myCar.age(year) + " years old.")
