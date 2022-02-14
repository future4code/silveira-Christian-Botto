// Exercícios de interpretação de código
// 1
/*
let a = 10
let b = 10

console.log(b) 
// Imprime o valor de b. Logo, imprimirá 10.

b = 5
console.log(a, b) 
// b recebeu um novo valor, 5/
// Logo, imprimirá 10 5
*/

//------------------------------------------------
// 2
/*
let aa = 10
let bb = 20
cc = aa
bb = cc
aa = bb

console.log(aa, bb, cc)
// Imprime o valor de aa, bb, cc.
// cc recebeu o valor de aa, se tornando 10;
// bb começa como 20, mas recebe o valor de cc, se tornando 10;
// aa começa como 10 e logo depois recebe o novo valor de 10 vindo de bb.
// Logo, imprimirá 10 10 10
*/
//------------------------------------------------
// 3 
/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
 alert(`Voce recebe ${t/p} por hora`)
// Devemos nomear variaveis com nomes significativos, que nos ajudem e 
// ajudem aos outros entenderem seus significados.
// Assim, sugeriria:
// p - > horasTrabDias 
// t - > salarioDia
*/
//------------------------------------------------
// - **Exercícios de escrita de código**
//------------------------------------------------
// 1 - 
 let nome 
 let idade
 console.log(typeof nome)
 console.log(typeof idade)
 // O Console irá imprimir "undefined" para as duas, já que seus tipos/valores não foram declarados.
nome = prompt("Qual é a seu nome?")
idade = prompt("Qual é a sua idade?")do u wanna plaay?
console.log(typeof nome)
console.log(typeof idade)
// Notei que ambas as informações foram armazenadas como uma string, inclusive a idade, não como número.
console.log("Olá", nome, "você tem", idade, "anos")

//------------------------------------------------
// 2 - 
var1 = prompt("Você gosta de esportes?")
var2 = prompt("Você gosta de música?")
var3 = prompt("Você gosta de séries?")
console.log("Você gosta de esportes? - ", var1)
console.log("Você gosta de música? - ", var2)
console.log("Você gosta de séries? - ", var3)
//------------------------------------------------
// 3 - 
let a = 10
let b = 25
// Para trocar os valores, criarei uma terceira variável, chamada auxiliar:
let aux = 0
// Aux começa com 0 e agora armazenará o valor de a
aux = a
// Agora a está livre para receber b
a = b
// E b está livre para receber o valor de a armazenado em aux
b = aux
//------------------------------------------------
// Desafios
var1 = prompt("Digite um número")
var2 = prompt("Digite um segundo número")
var1 = Number(var1)
var2 = Number(var2)
console.log("O primeiro número somado ao segundo resulta em:", var1+var2)
console.log("O primeiro número multiplicado ao segundo resulta em:", var1*var2)