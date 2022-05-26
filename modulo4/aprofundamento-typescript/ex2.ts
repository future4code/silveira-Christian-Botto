// 2 - 
// a)
// A entrada é um array de números
// A saída é um objeto com três valores, maior menor e média dessa array.

// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: {maior :number, menor: number, media:number} = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
//     return estatisticas
// }

// Linha 8 - numeroSorteados - Arumma de maneira crescente a array, logo, é uma array de números
// Linha 12 - soma é a soma de todos os números da array, logo, será um número
// linha 18 estatisticas é um objeto e todos os eus componentes são números.

// c)

// const amostraDeDados: {numeros:number[], obterEstatisticas:number[] }= {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => estatisticas(numeros)
// }