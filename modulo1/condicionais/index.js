// Exercícios de interpretação de texto 
// 1- 
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) 
// A condicional divide o número por 2 e calcula o resto. Caso o resto seja 0,
// ou seja, caso o número seja par, imprime "Passou no teste." (sem as aspas).
// Do contrário, imprime "ão passou no teste." (sem as aspas).

// b) Pares
// c) Ímpares

// ---------------------------------------
// 2 - 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) 
// O código serve para imprimir o preço de uma fruta digitada por um cliente.

// b) O preço da fruta maçã é 2,25 R$

// c) O preço da fruta  Pêra  é  R$  5
// O break aqui interrompe o switch.
// Caso o break seja removido, o próximo caso (default) será testado.
// Porém, como o default é o caso padrão, ele não precisa de fato ser testado.
// Assim, a variável "preço" assumirá o valor definido em default, que é de 5.
// ---------------------------------------
// 3 - 
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) 
// Ele está pedindo ao user para digitar um número (prompt) e esse número será armazenado como uma string. 
// Como queremos trabalhar com um numeral, utiliza-se a função Number() para converter de strin para number

// b)
// O condicional analisa se o número é positivo (maior que 0)
// Assim, digitando 10 ele passará e responderá "Esse número passou no teste" (sem as aspas).
// Agora, não foi definido um "else" para o caso de números menores que 10.
// Assim, não imprimirá nada no caso de -10.

// c)
// Sim, pois mensagem não é uma variável global. Ela é definida apenas dentro do escopo da condicional.
// Poderíamos solucionar o problema de duas formas:
// 1 - Definidndo "let mensagem" antes da condicional e removendo o "let" da variável dentro da condicional;
// 2 - colocando "console.log(mensagem)" dentro da condicional. 
// ---------------------------------------
// Exercícios de escrita de texto 
// 1- 
// a) e b)
/*
const ageUser= Number(prompt("Digite sua idade")) // 18
// c)
if (ageUser >=18) {
    console.log("Você pode dirigir!") // Você pode dirigir!
    }
    else {
        console.log("Você NÃO pode dirigir!")
}
*/
// ---------------------------------------
// 2- 
/*
const shiftUser= prompt("Digite seu turno: M (matutino) ou V (Vespertino) ou N (Noturno).") // M
// c)
if (shiftUser === "M") {
    console.log("Bom dia!") // Bom dia!
    }
    else if (shiftUser === "V"){
        console.log("Boa tarde!")
    }
    else if (shiftUser === "N"){
        console.log("Boa noite!")
    }
    else  {
        console.log("Turno não é válido!")
}
*/
// ---------------------------------------
// 3- 
/*
const shiftUserSwitch= prompt("Digite seu turno: M (matutino) ou V (Vespertino) ou N (Noturno).") // M
// c)
switch (shiftUserSwitch) {
    case "M":
    console.log("Bom dia!") // Bom dia!
    break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno não é válido!")
        break
}
*/
// ---------------------------------------
// 4- 
/*
const movieGenre = prompt("Qual o gênero do filme") // fantasia
const moviePrice = Number(prompt("Qual o preço do filme")) // 10

if (movieGenre === "fantasia" && moviePrice < 15) {
    console.log("Bom filme!") // Bom filme!
} else {
    console.log("Escolha outro filme")    
}
*/
// ---------------------------------------
// Desafios
// 1- 
/*
const movieGenreCh = prompt("Qual o gênero do filme") // fantasia
const moviePriceCh = Number(prompt("Qual o preço do filme")) // 10

if (movieGenreCh === "fantasia" && moviePriceCh < 15) {
    const movieSnack = prompt("Qual lanchinho você quer") // biscoito
    console.log(`Bom filme! e aproveite o seu/sua ${movieSnack}`) // Bom filme! e aproveite o seu/sua biscoito
} else {
    console.log("Escolha outro filme")    
}
*/
// ---------------------------------------
// 2 - 
const infoName = prompt("Digite nome completo")
const infoType = prompt("Digitetipo de jogo: IN indica internacional; e DO indica doméstico; ")
const infoStage = prompt("Digite Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const infoCat = Number(prompt("Digite categoria: pode ser as opções 1, 2, 3 ou 4;"))
const infoNum = Number(prompt("Digite cquantos ingressos"))

let ticketPrice 
let ticketTotal


switch (infoStage) {
    case "SF":
        switch (infoCat) {
            case 1:
                ticketPrice = 1320                 
            break
            case 2:
                ticketPrice =  880 
            break
            case 3:
                ticketPrice =  550
            break
            case 4:
            ticketPrice =  220
            break
        }
    case "DT":
        switch (infoCat) {
            case 1:
                ticketPrice = 660                
            break
            case 2:
                ticketPrice =  440 
            break
            case 3:
                ticketPrice =  330
            break
            case 4:
            ticketPrice =  170
            break
        }  
    case "FI":
        switch (infoCat) {
            case 1:
                ticketPrice = 1980                 
            break
            case 2:
                ticketPrice =  1320 
            break
            case 3:
                ticketPrice =  880
            break
            case 4:
            ticketPrice =  330
            break
        }      
}

if (infoType === "IN") {
    ticketPrice = ticketPrice/4.10
}
ticketTotal = ticketPrice*infoNum

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${infoName}`)
console.log(`Tipo de jogo: ${infoType}`)
console.log(`Etapa do jogo: ${infoStage}`)
console.log(`Categoria: ${infoCat}`)
console.log(`Quantidade de ingressos: ${infoNum}`)
console.log(`---Valores---`)
console.log(`Valor do ingresso: ${ticketPrice}`)
console.log(`Valor total: ${ticketTotal}`)

// Prints:

---Dados da compra---
// index.js:223 Nome do cliente: Christian Cardeal
// index.js:224 Tipo de jogo: IN
// index.js:225 Etapa do jogo: FI
// index.js:226 Categoria: 1
// index.js:227 Quantidade de ingressos: 10
// index.js:228 ---Valores---
// index.js:229 Valor do ingresso: 482.92682926829275
// index.js:230 Valor total: 4829.2682926829275




