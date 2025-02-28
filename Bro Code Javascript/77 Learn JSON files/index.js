// JSON = (JavaScript Object Notation) data-interchange format 
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

// ---------- JSON.stringify() ----------

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

const jsonString = JSON.stringify(people);

console.log(jsonString);

// resultado -> string com o JSON por extenso




// ---------- JSON.parse() ----------

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                                     {"name": "Patrick","age": 34,"isEmployed": false},
                                     {"name": "Squidward","age": 50,"isEmployed": true},
                                     {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);

// pega a string em formato JSON e transforma em objeto JS (array ou objeto)



// ---------- fetch() ----------

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));

// pega JSON de arquivo externo
// ver chat salvo com o chat gpt onde me ensina a salvar JSON com o codigo JS!!!

/*
não ta dando p fazer fetch desse person.json  ...acho que tem q ter [] envolvendo o json msm.. checar dps o video de novo e acrescentar a observação aqui
*/