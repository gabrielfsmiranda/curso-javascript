// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

// happyBirthday("BroCode", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

//pelo que eu entendi.. chama de parâmetro qd ta no esqueleto da função.. qd chama a função e define o parâmetro, esse parâmetro definido que chama de argumento

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(happyBirthday("BroCode", 25));
console.log(isValidEmail("Bro@fake.com"));