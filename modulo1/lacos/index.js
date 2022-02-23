// Exercícios de interpretação de código
// 1 -
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// Primeiro declara uma variável, valor, e atribui 0 a ela.
// Depois cria um loop começando em 0, aumentando em 1 e parando em 4.
// Então adiciona o valor atual de i para valor.
// Imprimirá então 10
// ------------------------------------------------
// 2 -
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) 
// O loop percorrerá toda a array chamada lista.
// Caso o número seja maior que 18, ele imprimirá.
// Os cinco primeiros elementos (incluindo o 18) são menores/iguais a 18, logo não passam na condicional (>)
// Assim, ele imprimirá (pulando uma linha entre cada, já que são chamadas diferentes):
// 19 21 23 25 27 30

// b)
// Não. o for of percorre cada elemento um a um, em ordem.
// ------------------------------------------------
// 3 -
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Primeiro se define a quantidade de linhas e a quantidade atual de linhas
// O loop externo irá rodar até a quantidade atual chegar na quantidade total (aumentando 1 ao final de cada loop)
// Esse loop inicia criando uma string vazia
// Daí será criado um loop interno. Ele cria uma string, asteriscos em 0, indo até  quantidade atual +1, aumentando 1 por loop.
// Ele então adiciona ao final da string um asterisco.
// Em ourtas palavras, irá adicionar a string vazia um número X de asteriscos referente ao número de linhas.
// Saindo do loop, ele irá printará a linha e pulará para a próxima.
// ------------------------------------------------
// Exercícios de escrita de código
// 1 -
const numberPets = Number(prompt("Quantos pets vc tem?"))
// a) e b)
let namePets = []
if (numberPets <1) {
    console.log("Que pena! Você deveria adotar um!")
}
    else {
        for(let ii = 0; ii < numberPets ; ii++){
            namePets[ii] = prompt(`Qual o nome do ${ii+1}° pet?`)
        }
}
// c)
for(let ii = 0; ii < numberPets ; ii++){
    console.log(`Seu pet de número ${ii+1} se chama ${namePets[ii]}`)
}
// Respostas para 3 pets chamados lala lele e lili:
// Seu pet de número 1 se chama lala
// Seu pet de número 2 se chama lele
// Seu pet de número 3 se chama lili
// ------------------------------------------------
// 2 -
const originalArray = [1,3,5,8,12]
// a)
for(let ii = 0; ii < originalArray.length  ; ii++){
    console.log(originalArray[ii]) // Imprime corretamente 1 3 5 8 12 separadas por uma linha
}
// b)
for(let ii = 0; ii < originalArray.length  ; ii++){
    console.log(originalArray[ii]/10) // Imprime corretamente 0.1 0.3 0.5 0.8 1.2 separadas por uma linha
}
// c)
let newArray =[]
jj = 0
for(let ii = 0; ii < originalArray.length  ; ii++){
    if (originalArray[ii]%2 ===0) {
		newArray[jj] = originalArray[ii]
        console.log(newArray[jj])    // Imprime corretamente 8 12 separadas por uma linha
        jj = jj +1
	}
}
// d)
let stringArray =[]
for(let ii = 0; ii < originalArray.length  ; ii++){
    stringArray[ii] = ii
    console.log(`O elemento de índex ${stringArray[ii]} é ${originalArray[ii]}`)
}
// Imprime:
// O elemento de índex 0 é 1
// O elemento de índex 1 é 3
// O elemento de índex 2 é 5
// O elemento de índex 3 é 8
// O elemento de índex 4 é 12
// e)
let maxValue = originalArray[0]
let minValue = originalArray[0]
for(let ii = 0; ii < originalArray.length  ; ii++){
    if (maxValue < originalArray[ii]){
        maxValue = originalArray[ii]
    }
    if (minValue > originalArray[ii]){
        minValue = originalArray[ii]
    }
}
console.log(`Valor máximo é ${maxValue} e valor mínimo é ${minValue}`) // Valor máximo é 12 e valor mínimo é 1
// ------------------------------------------------
// Desafios
// 1 -
// a)
let correctNumber = Number(prompt("Digite o número em que está pensando"))
console.log("Vamos jogar!")
// b)
let tries = 0
let guess
while(guess != correctNumber){
    guess = Number(prompt("Chute um número"))
    if (guess === correctNumber) {
        console.log("Parabéns! Você acertou o número ", correctNumber, " em apenas ", tries,"tentativas")
    } else {
        if (guess > correctNumber) {
            console.log("O número correto é menor que seu chute")
        } else {
            console.log("O número correto é maior que seu chute")
        }
    }
    tries = tries + 1
}
// O programa está funcionando corretamente.
// ------------------------------------------------
// 2 - Agora o jogo será automatizado
let correctNumberRand = Math.floor((Math.random() * 100) + 1);
console.log("Vamos jogar!")
// b)
let triesR = 0
let guessRand
while(guessRand != correctNumberRand){
    guessRand = Number(prompt("Chute um número"))
    if (guessRand === correctNumberRand) {
        console.log("Parabéns! Você acertou o número ", correctNumberRand, " em apenas ", triesR,"tentativas")
    } else {
        if (guessRand > correctNumberRand) {
            console.log("O número correto é menor que seu chute")
        } else {
            console.log("O número correto é maior que seu chute")
        }
    }
    triesR = triesR + 1
}

// A alteraçãoo foi extremamente simples.
// Do jeito que construi meu primeiro código, bastou eu alterar o recebimento da variável com o valor correto 







