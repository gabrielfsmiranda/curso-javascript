// .reduce() = reduce the elements of an array
//                     to a single value    

// ----------- EXAMPLE 1 -----------
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

//o toFixed(2) deixa o número com duas casas decimais após a vírgula...se tiver mais, reduz e se tiver a menos, adiciona 0...

function sum(accumulator, element){
    return accumulator + element;
}


// ----------- EXAMPLE 2 -----------
const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

//deixa eu fazer um teste

const arrayTest = [1, 2, 3, 4];

const totalTestMultiplied = arrayTest.reduce(mult);

function mult(accumulator, element){
    return accumulator * element;
}

console.log(totalTestMultiplied);

//deu certo...primeiro eu tinha testado com um 0, mas tudo multiplicado por 0 da zero kkk

//esse tipo de função serve para acumular valores quando junta com o método reduce que faz uma iteração no array...

//ver mais sobre como o reduce funciona.. map é novo array cada elemento com uma operação, filter novo array passando por teste.. e reduce retorna um dado acumulado iterando todos os itens do array.. acho que é isso


//ver metodos Math.max() e Math.min()
//provavelmente reduce vai comparando de 2 em dois.. aí o math max escolhe e segura o maior no acumulador e o min faz o oposto.. daria pra escrever de outra maneira tb..

//deixa eu testar

const testando = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];

const testandoMesmo = testando.reduce((a, b) => {if(a > b){return a}else return b});

console.log(testandoMesmo);

/*
Deu certo!!!!


const testando = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const testandoMesmo = testando.reduce((a, b) => {if(a < b){return a}else return b});

console.log(testandoMesmo);


a operação contrária tb funcionou.. é uma comparação entre o valor anterior e o próximo msm
*/