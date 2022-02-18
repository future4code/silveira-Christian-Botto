// Exercícios de interpretação de código
// 1 - 
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) // 10
// console.log(minhaFuncao(10)) // 50

// a)
// A função pega um argumento e multiplica ele por 5.
// Assim, o primeiro retornará 10 (2*5=10)
// E o segundo retornará50 (10*5=50)

// b) 
// Não apareceria nada, pois não estamos imprimindo nada
// Mas a função ainda estaria sendo calculada.

// ---------------------------------------------------
// 2 -
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a)
// A função recebe como argumento uma string
// Ela então fará duas operações:
// Primeiro, colocará tudo em lowe case
// Depois, ele avaliará a stringpara ver se encontra a string "cenoura"
// caso positivo, retornará "true". Caso falso, "false"
// Por exemplo:
// Testandp "gosto de bolo de laranja" retorna false
// Já testando "gosto de bolo de laranja", retorna true

//b)
// i - Eu gosto de cenoura - > true
// ii - CENOURA é bom pra vista -> true
// iii - Cenouras crescem na terra - > true

// ---------------------------------------------------
// Exercícios de escrita de código
// 1 - 
// a)
const funIntro = function() {
	console.log("oi me chamo christian e sou do rio")
}
funIntro() // oi me chamo christian e sou do rio
// b)
let nameUser = ("Christian")
let ageUser = Number("29")
let cityUser = ("Niteroi")
let profUser = ("Engenheiro")

const funIntro2 = function(par1, par2, par3, par4) {
	console.log(`Eu sou ${par1}, tenho ${par2} anos, moro em ${par3} e sou ${par4}.`)
}
funIntro2(nameUser, ageUser, cityUser, profUser) // Eu sou Christian, tenho 29 anos, moro em Niteroi e sou Engenheiro.
// ---------------------------------------------------
// 2 - 
// a)
const funAdd = function(par1, par2) {
	return par1 + par2
}
let numOne_a = 5
let numTwo_a = 9
results_a = funAdd(numOne_a, numTwo_a) 
console.log(results_a) // 14

// b)
const funCompare = function(par1, par2) {
    let returnBoolean
    returnBoolean = par1 >= par2
    return returnBoolean
}
let numOne_b = 5
let numTwo_b = 9
results_b = funCompare(numOne_b, numTwo_b) 
console.log(results_b) // false
// Testando com 5 5 -> true
// Testando com 9 5 -> true
// testando com 5 9 -> false

// c)
const funEven = function(par1) {
    let returnOdd
    returnOdd = par1%2 == 0
    return returnOdd
}
let numOne_c = 5

results_c = funEven(numOne_c) 
console.log(results_c) // false
// Testando com 5 -> false
// Testando com 6 -> true

// d)
const funStringLength = function(par1) {
    returnLength = par1.length
    returnUpper = par1.toUpperCase()
    return [returnLength, returnUpper]
}
userSentence = ("Ola como vai voce")
const [results_d1, results_d2] = funStringLength(userSentence)
let results_d_final = (`Tamanho da string ${results_d1} e versão em maiúscula ${results_d2}`)
console.log(results_d_final) // Tamanho da string 17 e versão em maiúscula OLA COMO VAI VOCE
// ---------------------------------------------------
// 3 -
let numUser1 = Number(prompt ("Digite um número"))
let numUser2 = Number(prompt ("Digite outro número"))

const funThreeAdd = function(par1, par2) {
    return par1+par2
}
const funThreeSub = function(par1, par2) {
    return par1-par2
}
const funThreeMult = function(par1, par2) {
    return par1*par2
}
const funThreeDiv = function(par1, par2) {
    return par1/par2
}

let resultsThree1 =  funThreeAdd(numUser1,numUser2)
let resultsThree2 =  funThreeSub(numUser1,numUser2)
let resultsThree3 =  funThreeMult(numUser1,numUser2)
let resultsThree4 =  funThreeDiv(numUser1,numUser2)

console.log(`Números inseridos: ${numUser1} e ${numUser2}`) // Números inseridos: 5 e 10
console.log(`Soma: ${resultsThree1}`) // Soma: 15
console.log(`Subtração: ${resultsThree2}`) // Subtração: -5
console.log(`Multiplicação: ${resultsThree3}`) // Multiplicação: 50
console.log(`Divisão: ${resultsThree4}`) // Divisão: 0.5
// ---------------------------------------------------
// Desafios
// 1 - 
// a)
const funPrinter = var1 => console.log(var1)

let userString = "Ola como vai vc?"

funPrinter(userString) // Ola como vai vc?

// b)

const funArrowSumm = (var1, var2) => {
    let resultsChal = var1+var2
    funPrinter(resultsChal)
}
let numChall1 = 21
let numChall2 = 36

funArrowSumm (numChall1,numChall2 ) // 57
// ---------------------------------------------------
// 2 -
const funPit = function(cat1,cat2){
    let hip
    hip = Math.sqrt(Math.pow(cat1,2)+Math.pow(cat2,2))
    return hip
}

let catOne = 3
let catTwo = 4

let resultsPit = funPit(catOne, catTwo)

console.log(resultsPit) // 5 (pois 5^2 = 3^2 + 4^2)