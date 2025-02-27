// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("You have reached the end!");

/*
Tipos de erros que você irá encontrar no bloco que usou o try:

- NETWORK ERRORS
- PROMISE REJECTION
- SECURITY ERRORS


Finally é usado para:

- CLOSE FILES
- CLOSE CONNECTIONS
- RELEASE RESOURCES

...o finally é pra organizar o final.. esse código é sempre executado independente se o resultado do try deu erro ou se deu certo

Throw é para criar tipos de erros personalizados.. tipo quando o usuário digita algo que não faz sentido no propósito do algoritmo.

catch() aceita um parâmetro, o objeto de erro -> catch(error)
console.log(error) vai mostrar o erro
console.error(error) vai mostrar o erro e destacá-lo no console

*/