// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
//      sayHello: function(){console.log(`Hi! I am ${favFood}`)}              não funciona
//      sayHello: function(){console.log(`Hi! I am ${person1.favFood}`)}      funciona, porém o this é mais suscinto, né
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
//      eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}      com arrow function, o this se refere ao window object tb
}

// console.log(this);       retorna o window object... que é o objeto padrão que sempre estamos usando com javascript no browser né..

person1.eat();
person2.eat();