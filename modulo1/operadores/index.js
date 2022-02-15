// Exercícios de interpretação
// 1 - 
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2 // Inverso de bool2, logo, true

let resultado = bool1 && bool2
console.log("a. ", resultado) // true and false -> false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  //  true and false and true -> false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //(true or false -> true) o resultado anterior era false, logo
// o inverso é true. Assim, fica true and true -> true

console.log("d. ", typeof resultado) // estamos trabalhando com BOOLEAN
*/

// --------------------------------------
// 2- 
/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // O problema se dá porque os valores recebidos como variáveis não são números, mas strings.
// Para consertar o problema, ele deve convertê-las com a função Number().
*/
// --------------------------------------
// 3- 
/*
// Como dito acima, o imput deve ser passado de string para number.
// Para consertar isso, poderíamos usar, por exemplo:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

// --------------------------------------
// Exercícios de Escrita
// 1 - 

// a)
let idadeSua = prompt ("Qual a sua idade?")
idadeSua = Number(idadeSua)
// b)
let idadeAmigo = prompt ("Qual a idade do seu amigo?")
idadeAmigo = Number(idadeAmigo)
// c)
respostaBoolean = idadeSua > idadeAmigo
console.log("Sua idade é maior do que a do seu amigo?", respostaBoolean) // Sua idade é maior do que a do seu amigo? true
// d)
respostaDif = idadeSua - idadeAmigo
console.log("Diferença:", respostaDif) // Diferença: 5
// Fiz testes envolvendo A > B, A < B e A = B
// Como exemplo acima, escolhi A = 25 e B = 20

// --------------------------------------
// 2 - 

// a)
let numPar = prompt ("Insira um número par")
numPar = Number(numPar)

// b)
console.log(numPar/2)
// Testando a divisão por números pares, consigo ver que o programa funciona corretamente, retornando valores inteiros.
// Já testando com números ímpares, também funciona corretamente (já que não restringimos o imput apenas para números pares)
// mas são números com decimais, como esperado.

// --------------------------------------
// 3 - 

let idadeSua = prompt ("Qual a sua idade?")
idadeSua = Number(idadeSua)  

// a) Teste -> 10 an0s
idadeMeses = idadeSua*12
console.log("Sua idade em meses é", idadeMeses) // Sua idade em meses é 120
// b)
idadeDias = idadeMeses*30
console.log("Sua idade em dias é", idadeDias) // Sua idade em dias é 3600
// c)
idadeHoras = idadeDias*24
console.log("Sua idade em horas é", idadeHoras) // Sua idade em horas é 86400


// --------------------------------------
// 4 - Testes

let num1 = prompt ("Digite um número")
let num2 = prompt ("Digite outro número")

num1 = Number(num1) 
num2 = Number(num2)

result1 = num1 > num2
result2 = num1 === num2
result3 = num1%num2
result3 = result3 == 0 // Para checar se o resto da divisão é 0, fazendo ele divisível
result4 = num2%num1
result4 = result4 == 0 // Para checar se o resto da divisão é 0, fazendo ele divisível

// Fiz testes envolvendo A > B, A < B e A = B
// Como exemplo aqui, escolhi A = 20 e B = 10

console.log("O primeiro numero é maior que o segundo?", result1) // O primeiro numero é maior que o segundo? true
console.log("O primeiro numero é igual ao segundo? ", result2) // O primeiro numero é igual ao segundo?  false
console.log("O primeiro numero é divisível pelo segundo? ", result3) // O primeiro numero é divisível pelo segundo?  true
console.log("O segundo numero é divisível pelo primeiro?", result4) // O segundo numero é divisível pelo primeiro? false

// --------------------------------------
// Desafios
// 1 - 
// grausFahrenheit = grausCelcius*(9/5) + 32
// grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15

resultA = (77 - 32)*(5/9) + 273.15
resultB = 80*(9/5) + 32
resultC1 = 30*(9/5) + 32
resultC2 = (resultC1 - 32)*(5/9) + 273.15

// a)
console.log("77 graus Fahrenheit em Kelvin é", resultA) // 77 graus Fahrenheit em Kelvin é 298.15
// b)
console.log("80 graus Celcius em Fahrenheit é", resultB) // 80 graus Celcius em Fahrenheit é 176
// c)
console.log("30 graus Celcius em Fahrenheit e Kelvin são, respectivamente", resultC1, resultC2) // 30 graus Celcius em Fahrenheit e Kelvin são, respectivamente 86 303.15
//d)
let grauUser = prompt ("Digite um grau em Celcius para ser convertido para F") // Digitei 60
grauUser = Number(grauUser)
grausFahrenheit = grauUser*(9/5) + 32
console.log(grauUser, "graus Celcius em F são", grausFahrenheit) // 60 'graus Celcius em F são' 140

// --------------------------------------
// 2 - 

// a)
let quiloWatts = prompt ("Quantos quilowatts foram consumidos esse mês?") // Digitei 100
quiloWatts = Number(quiloWatts)
consumoEnergia = quiloWatts*0.05
console.log("O consumo de energia nesse mês foi de", quiloWatts, "quilowatts, sendo o valor a ser pago de R$", consumoEnergia)
// O consumo de energia nesse mês foi de 100 quilowatts, sendo o valor a ser pago de R$ 5

// Se o consumo foi de 280 qilowatt hora, o valor a ser pago será de:
let quiloWatts2 = 280
consumoEnergia2 = quiloWatts2*0.05
console.log("O consumo de energia nesse mês foi de", quiloWatts2, "quilowatts, sendo o valor a ser pago de R$", consumoEnergia2)
// O consumo de energia nesse mês foi de 280 quilowatts, sendo o valor a ser pago de R$ 14

// b)
// Agora, se quisermos aplicar 15% de desconto, o programa fica:
let quiloWatts3 = prompt ("Quantos quilowatts foram consumidos esse mês?") m// Digitei 150
quiloWatts3 = Number(quiloWatts3)
consumoEnergia3 = quiloWatts3*0.05*0.85
console.log("O consumo de energia nesse mês foi de", quiloWatts3, "quilowatts, sendo o valor a ser pago (com desconto) de R$", consumoEnergia3)
// O consumo de energia nesse mês foi de 150 quilowatts, sendo o valor a ser pago (com desconto) de R$ 6.375

// Assim, para o caso da residência com consumo de 280:
let quiloWatts4 = 280
consumoEnergia4 = quiloWatts4*0.05*0.85
console.log("O consumo de energia nesse mês foi de", quiloWatts4, "quilowatts, sendo o valor a ser pago (com desconto) de R$", consumoEnergia4)
// O consumo de energia nesse mês foi de 150 quilowatts, sendo o valor a ser pago (com desconto) de R$ 6.375

// --------------------------------------
// 3 - 
// a) 1 pound is equal to 0.45359237 kilograms
poundImput = 20
poundsKg = poundImput*0.45359237
console.log("20 libras são", poundsKg, "kg") // 20 libras são 9.071847400000001 kg

// b) 1 ounce is equal to 0.45359237 kilograms
ounceImput = 10.5
ouncesKg = ounceImput*0.0283495
console.log("10.5 onças são", ouncesKg, "kg") // 10.5 onças são 0.29766975 kg

// c) 1 mile is equal to 1609.34 meters
miImput = 100
miMeters = miImput*1609.34
console.log("100 mi são", miMeters, "m") // 100 mi são 160934 m

// d) 1 feet is equal to 0.3048 meters
ftImput = 50
ftMeters = ftImput*0.3048
console.log("50 ft são", ftMeters, "m") // 50 ft são 15.24 m

// e) 1 galon is equal to 3.78541 litres
galImput = 103.56
galLiters = galImput*3.78541
console.log("103.56 gal são", galLiters, "l") // 103.56 gal são 392.01705960000004 l

// f) 1 xícara tem 240ml
xicImput = 0.240
xicLiters = xicImput*0.240
console.log("450 xic são", xicLiters, "l") // 450 xic são 0.0576 l

// g) Irei modificar o primeiro

let convPounds = prompt ("Quantas libras você quer converter para kg?")
poundsKgUser = convPounds*0.45359237
console.log(convPounds,"libras são", poundsKgUser, "kg") // Para 40 libras: 40 libras são 18.143694800000002 kg