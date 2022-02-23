// Exercícios de interpretação de código
// 1 -
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// No primeiro console log, retornará o primeiro elemento de elemento, Matheus Nachtergaele
// No segundo console log, retornará o último elemento de elenco, Virginia Cavendish
// No terceiro console log, retornará todo o terceiro valor, Globo 19h
// ------------------------------------------------
// 2 -
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)
// No primeiro console log, será impresso todo o objeto:
// nome Juca
// idade 3
// raca SRD
// Para segundo console log, houve o spread de cachorro e a troca do nome de Juca -> Juba:
// nome Juba
// idade 3
// raca SRD
// Para o terceiro console log, houve o spread de gato e a troca de todas as letras 'a' em nome para 'o':
// nome Jubo
// idade 3
// raca SRD

// b) Faz o spread do objeto, ou seja, o copia
// ------------------------------------------------
// Exercícios de escrita de código
// 1 -
// a)
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 
 // Exemplo de saída
 "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

 const funPrint = function(obj) {
	console.log(`Eu sou ${obj.nome} nas pode me chamar de ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]} `)
}
a1 = funPrint(pessoa) // Eu sou Amanda nas pode me chamar de Amandinha, Mandinha ou Mandi

//b)
const pessoa2 = {...pessoa, apelidos: ["Ama", "Ame", "Amy"]}
b1 = funPrint(pessoa2) // Eu sou Amanda nas pode me chamar de Ama, Ame ou Amy 
// ------------------------------------------------
// 2 -
// a)
const objOne = {
    name: "Joao", 
    age: 20,
    prof: "Estudante"
 }

 const objTwo= {
    name: "Maria", 
    age: 25,
    prof: "Programadora"
 }

// b)

const funInfo = function(obj) {
	return [obj.name, obj.name.length, obj.age, obj.prof,obj.prof.length]
}

b21 = console.log(funInfo(objOne)) // (5) ['Joao', 4, 20, 'Estudante', 9]
b22 = console.log(funInfo(objTwo)) // (5) ['Maria', 5, 25, 'Programadora', 12]
// ------------------------------------------------
// 3 -
// a)
let carrinho =[]
// b)
const objFruit1 = {
    name: "Maçã", 
    av: true
 }
 const objFruit2 = {
   name: "Laranja", 
   av: true
}
const objFruit3 = {
   name: "Banana", 
   av: true
}
// c)
const funPushCarr = function(obj) {
   	return carrinho.push(obj.name)
   }
c31 = funPushCarr(objFruit1)
c32 = funPushCarr(objFruit2)
c33 = funPushCarr(objFruit3)
// d)
console.log(carrinho) //(3) ['Maçã', 'Laranja', 'Banana']
// ------------------------------------------------
// Desafios
/*
// 1 -
// a)
const funChallenge1 = function() {
   let nameUser = prompt("Qual é o seu nome")
   let ageUser = Number(prompt("Qual é a sua idadee"))
   let profUser = prompt("Qual é a msua profissão")

   const objInfo = {
      name: nameUser, 
      age: ageUser,
      prof: profUser
   }
   return objInfo
}

aaa = funChallenge1()
console.log(aaa)

// Depois termino desafios
*/