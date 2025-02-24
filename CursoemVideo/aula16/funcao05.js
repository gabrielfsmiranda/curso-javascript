//Recursividade

/*
5! = 5 x 4!

ou seja

n! = n x (n - 1)!
1! = 1
*/

function fatorial(n) {
    if (n ==1) {
        return 1
    } else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(3))

/*
Fui simulando cada linha de codigo com os resultados if e else.. true ou false
Nesse jeito, vai armazenando o primeiro n e cada vez q volta la pra cima, diminui, pois só volta pra função fatorial fazendo o n-1
daí a função para qd o n = 1

fica realmente igual a gnt calcula o fatorial no papel

ex de como vi:

exec função fat com n = 3
    3 * (exec fat 3-1=2)
        3 * 2 (exec fat (2-1=1)
            ...aqui cai no if (n == 1), entao retorna abaixo
                3 * 2 * 1 = 6

                ou seja: igualzinho a gnt calcula o fatorial...
                -> o script vai guardando o valor e executando a função dentro da função até  parar... nesse caso, a gnt tem q botar o if (n == 1) pra retornar 1 e parar
                    se não botar esse if de cima, a função ficaria num loop infinito e travava...depois eu testo, mas mentalmente eu sei que fica num loop infinito!!!
 
*/

/*
Curso básico.. agora tem mais 2vid de exercicios e um de proximos passos
Prof falou que tem muuuito mais coisa sobre funções.. pra seguir estudando dps
Dps desse ultimo video de proximos passos deve ter um direcionamento...veremos \o/
*/