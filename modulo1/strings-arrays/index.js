// Exercícios de interpretação de código
// 1 -
let array
console.log('a. ', array) // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11 (pois tem 11 elementos)

let i = 0
console.log('d. ', array[i]) // d. 3 (pois é o elemento de index 0)

array[i+1] = 19
console.log('e. ', array) // e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] (11 é o length eirá substituir o elemento 0+1 = 1 por 19) 

const valor = array[i+6]
console.log('f. ', valor) // f. 9 (pois irá imprimir o sétimo elemento)
// ------------------------------------------------------
// 2 -
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Primeiro irá colocar a frase em upper case - > SUBI NUM ÔNIBUS EM MARROCOS
// Depois irá substituir todos os A por I ->SUBI NUM ÔNIBUS EM MiRROCOS
// Além disso, depois da vírgula tem um comando para imprimir o número de elementos dessa string, includindo os espaços
// Assi, será impresso:
// SUBI NUM ÔNIBUS EM MIRROCO 26
// ------------------------------------------------------
// Exercícios de escrita de código
// 1 -
nameUser = prompt("Digite seu nome")
emailUser = prompt("Digite seu e-mail")

displaySentence1 = "O e-mail " + emailUser + " foi cadastrado com sucesso. Seja bem vindo(a) " + nameUser +"!"
displaySentence2 = `Seja bem vindo(a) ${nameUser}. O e-mail ${emailUser} foi cadastrado com sucesso!`

console.log(displaySentence1) // O e-mail christian@christian.com foi cadastrado com sucesso. Seja bem vindo(a) Christian!
console.log(displaySentence2) // Seja bem vindo(a) Christian. O e-mail christian@christian.com foi cadastrado com sucesso!
// ------------------------------------------------------
// 2 -
const favFoods = ["lasanha", "hamburguer", "pizza", "macarrão", "sorvete"]
// a)
console.log(favFoods) // (5) ['lasanha', 'hamburguer', 'pizza', 'macarrão', 'sorvete']
// b)
console.log("Essas são minhas comidas favoritas:") // Essas são minhas comidas favoritas:
console.log(favFoods[0]) // lasanha
console.log(favFoods[1]) // hamburguer
console.log(favFoods[2]) // pizza
console.log(favFoods[3]) // macarrão
console.log(favFoods[4]) // sorvete
// c)
foodUser = prompt ("Digite sua comida favorita") // Maçã
favFoods[1] = foodUser
console.log(favFoods) // (5) ['lasanha', 'Maçã', 'pizza', 'macarrão', 'sorvete']
// ------------------------------------------------------
// 3 -
// a)
let listaDeTarefas  = [null]
// b)
listaDeTarefas[0] = prompt("Digite a primeira tarefa que precisa fazer hoje") // Comer
listaDeTarefas[1] = prompt("Digite a segunda tarefa que precisa fazer hoje") // Estudar
listaDeTarefas[2] = prompt("Digite a terceira tarefa que precisa fazer hoje") // Dormir
// c)
console.log(listaDeTarefas) // (3) ['Comer', 'Estudar', 'Dormir']
// d)
taskDone = Number(prompt("Digite o número de uma tarefa realizada")) // Vou usar o 1,2 e 3 ao invés de 0, 1 e 2
// e)
listaDeTarefas.splice(taskDone-1,1) // Tiro 1 de taskDone já que o usuário digitou 1, 2 e 3, e não o índex
// f)
console.log(listaDeTarefas) // (2) ['Estudar', 'Dormir']
// ------------------------------------------------------
// Desafios
// 1 - 
// Receberei uma frase do user.
userSentence = prompt("Digite uma frase")
// Para contar o número de palavras, vou:
// Salvar a string em uma auxiliar
userSentenceAux = userSentence
// Usar indexOf() para encontrar o primeiro espaço
searchTerm = " " // Termo procurado é um espaço
whereIsSpace = userSentenceAux.indexOf(searchTerm)  // Encontra o índice do primeiro espaço
// Agora salvo aa primeira palavra que vai do índice 0 até o índice whereIsSpace
let arraySentence = []
arraySentence = userSentence.slice(0, whereIsSpace)
// Agora podemos seguir para o próximo espaço, que começará a busca a partir do índice whereIsSpace
//Essa é a estrutura básica do loop;

// Construindo então esse loop:
userSentenceFinal = userSentence // Nosso auxiliar
searchTermFinal = " " // Nosso termo procurado
let arraySentenceFinal = [] // Nossa array final
jj = 0 // Contador para os índex das arrays
for (let ii = 0; ii > 10; ii = ii + whereIsSpaceFinal +1  ) { // Loop percorrendo a array do índice 0 ao índice referente ao length
    whereIsSpaceFinal = userSentenceFinal.indexOf(searchTermFinal, ii) // ii representa de onde ele iniciará a busca
    arraySentenceFinal[jj] = userSentenceFinal.slice(ii, whereIsSpaceFinal)
    jj = jj+1
}
console.log(arraySentenceFinal) // Não consegui terminar a tempo



// ------------------------------------------------------
// 2 -
fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
for (let ii = 0; ii <fruits.length; ii++) { // Loop percorrendo a array do índice 0 ao índice referente ao número anterior ao length
    aux = fruits.includes("Abacaxi") // Auxiliar contendo o nome da string
    if (aux == true){ // Condicional para saber se em alguma posição retornará true
        indexFruits = ii // Armazena o index da posição retornada como true
    }
}
displaySentence = "Index do abacaxi é "+ (indexFruits-1)+ " (correspondente a posição número " +indexFruits +"). Tamanho da array é " + fruits.length +"."
console.log (displaySentence) // Index do abacaxi é 3 (correspondente a posição número 4). Tamanho da array é 5.
