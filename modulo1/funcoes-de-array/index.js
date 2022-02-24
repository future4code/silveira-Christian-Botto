// Exercícios de interpretação de código
// 1- 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


// A função map cria uma nova array, percorrendo cada elemento desta e fazendo uma transformação.
// Nesse caso, cada item será substituido por um print (console.log) de todo o objeto.
// Dessa forma, ele imprimirá o objeto completo três vezes.
// ---------------------------------------------------
// 2 - 
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome 
//   })
  
//   console.log(novoArrayB)

// Nesse caso, na nova array só será salvo as variáveis salvas em "nome".
// Assim, retornará cada um dos nomes.
// ---------------------------------------------------
// 3 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// Aqui a função invocada foi filter.
// Ela retorna uma nova array com todos os items que passaram no teste de uma função
// Nesse caso, ela quer saber de todos os elementos que NÃO contenham a string "Chijo" associada à "apelido".
// Assim sendo, retornará os outros dois elementos.
// ---------------------------------------------------
// Exercícios de escrita de código
// 1 - 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 // a)
   const petsNames = pets.map((item, index, array) => {
     return item.nome
  })
  console.log(petsNames)
//   (6) ['Lupin', 'Polly', 'Madame', 'Quentinho', 'Fluffy', 'Caramelo']
//   0: "Lupin"
//   1: "Polly"
//   2: "Madame"
//   3: "Quentinho"
//   4: "Fluffy"
//   5: "Caramelo"
//   length: 6

// b)
const petsNamesS = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
 })
 console.log(petsNamesS)
// 0: {nome: 'Lupin', raca: 'Salsicha'}
// 1: {nome: 'Quentinho', raca: 'Salsicha'}
// length: 2
// c)
const petsListPoodle = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
 })
 const petsNamesPoodle = petsListPoodle.map((item, index, array) => {
    return [`Parabéns! Você ganhou um cupom de 10% de desconto para tosar o/a ${item.nome}`]
 })
 console.log(petsNamesPoodle)
// Console log:
// 0: ['Parabéns! Você ganhou um cupom de 10% de desconto para tosar o/a Madame']
// 1: ['Parabéns! Você ganhou um cupom de 10% de desconto para tosar o/a Fluffy']
// ---------------------------------------------------
// 2 - 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a)
const productsNames = produtos.map((item, index, array) => {
    return item.nome
 })
console.log(productsNames)
// 0: "Alface Lavada"
// 1: "Guaraná 2l"
// 2: "Veja Multiuso"
// 3: "Dúzia de Banana"
// 4: "Leite"
// 5: "Cândida"
// 6: "Detergente Ypê"
// 7: "Vinho Tinto"
// 8: "Berinjela kg"
// 9: "Sabão em Pó Ypê"

// b)
const discountProducts = produtos.map((item, index, array) => {
    return [`Nome: ${item.nome} e preço (com 5% de desconto): ${item.preco*0.95}`]
 })
console.log(discountProducts)
// 0: ['Nome: Alface Lavada e preço (com 5% de desconto): 2.375']
// 1: ['Nome: Guaraná 2l e preço (com 5% de desconto): 7.409999999999999']
// 2: ['Nome: Veja Multiuso e preço (com 5% de desconto): 11.969999999999999']
// 3: ['Nome: Dúzia de Banana e preço (com 5% de desconto): 5.415']
// 4: ['Nome: Leite e preço (com 5% de desconto): 2.8405']
// 5: ['Nome: Cândida e preço (com 5% de desconto): 3.135']
// 6: ['Nome: Detergente Ypê e preço (com 5% de desconto): 2.09']
// 7: ['Nome: Vinho Tinto e preço (com 5% de desconto): 52.25']
// 8: ['Nome: Berinjela kg e preço (com 5% de desconto): 8.5405']
// 9: ['Nome: Sabão em Pó Ypê e preço (com 5% de desconto): 10.26']

// c)
const beverageProducts = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
 })
 console.log(beverageProducts)
//  0: {nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8}
//  1: {nome: 'Leite', categoria: 'Bebidas', preco: 2.99}
//  2: {nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55}

// d)
const ypeProducts = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 })
 console.log(ypeProducts)
//  0: {nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2}
//  1: {nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8}

// d)
const ypeProducts2 = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
 })
 const ypePrices = ypeProducts2.map((item, index, array) => {
    return [`Compre ${item.nome} por ${item.preco}`]
 })
 console.log(ypePrices)
//  0: ['Compre Detergente Ypê por 2.2']
// 1: ['Compre Sabão em Pó Ypê por 10.8']
// ---------------------------------------------------
// Desafios
// 1 - 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 // a)
 const pokeNames = pokemons.map((item, index, array) => {
    return item.nome
 })
const pokeNamesSorted = pokeNames.sort()
console.log(pokeNamesSorted)
// 0: "Bellsprout"
// 1: "Bulbasaur"
// 2: "Charmander"
// 3: "Psyduck"
// 4: "Squirtle"
// 5: "Vulpix"

// b)
const pokeTypes = pokemons.map((item, index, array) => {
    return item.tipo
 })
console.log(pokeTypes) // Aqui ainda vai imprimir todos os tipos, pois ainda não alterei a array
// (6) ['grama', 'grama', 'fogo', 'fogo', 'água', 'água']
for(let ii = 1; ii < pokeTypes.length   ; ii++){
    if (pokeTypes[ii] === pokeTypes[ii -1])
        pokeTypes.splice(ii,1)
}
console.log(pokeTypes) // Aqui os elementos repetidos já foram deletados, logo, só serão imrpessos uma ocorrência de cada>
// (3) ['grama', 'fogo', 'água']
