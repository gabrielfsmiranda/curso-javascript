class Person{

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName){
    if(typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    }
    else{
      console.error("O nome deve ser uma string")
    }
  }

  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    }
    else{
      console.error("O sobrenome deve ser uma string")
    }
  }

  set age(newAge) {
    if(typeof newAge === "number" && newAge >= 0) { //atenção que não é typeof Number kkk
      this._age = newAge;
    }
    else{
      console.error("A idade deve ser um número positivo")
    }
  }

  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  get fullName(){
    return this._firstName + " " + this._lastName;
  }

  get age(){
    return this._age;
  }

}

//const person = new Person(420, 69, "pizza") antes dos getters and setters

// const person = new Person("Gabriel", "Miranda", 29) agora só com setters da undefined
// porquê tem que definir um getter para colocar o _propriedade = propriedade

const person = new Person("Gabriel", "Miranda", 29)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName) //person tb herda o get fullName da classe Person
console.log(person.age);