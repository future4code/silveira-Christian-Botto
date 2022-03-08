// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
    // Desafio
    // let arrayAux2 = array.slice()
    //     var jj = array.length
    // for (var ii = 0; ii < array.length; ii++) {
    //     array[ii] = arrayAux2[jj]
    //     jj = jj-1
    //   }
    //   return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array = array.sort((a, b) => a - b);
//     // Desafio
//     var arrayFinal3 = []
//     var arrayAux3 = array.slice()
//     for (var ii = 0; ii < arrayAux3.length; ii++) {
//         var minValue = array[0]
//         for (var ii = 0; ii < array.length; ii++) {
//             if (minValue > array[ii]){
//                 minValue = array[ii]
//             }
//             array.splice(ii,1)
//         }
//         arrayFinal3.push(minValue)
//     }
//       return arrayFinal3 
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayAux4 = []
    for (var ii = 0; ii < array.length; ii++){
        if (array[ii]%2 === 0){
            arrayAux4.push(array[ii])
        }
    }
  return arrayAux4
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayAux5 = []
    for (var ii = 0; ii < array.length; ii++){
        if (array[ii]%2 === 0){
            arrayAux5.push(array[ii])
        }
    }
    const arrayAux5map = arrayAux5.map(x => Math.pow(x,2));
  return arrayAux5map
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maxValue = array[0]
for(let ii = 0; ii < array.length  ; ii++){
    if (maxValue < array[ii]){
        maxValue = array[ii]
    }
}
return maxValue
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    // Maior número
    let biggestNum 
    if (num1>num2){
        biggestNum = num1
        lowestNum = num2
    } 
    else {
        biggestNum = num2
        lowestNum = num1
    }
    // Maior divisor
    let divisible = biggestNum%lowestNum ===0
    // Diferença
    let diff = biggestNum-lowestNum 
    // Criando objeto
    const obj7 = {
        maiorNumero: biggestNum, 
        maiorDivisivelPorMenor: divisible,
        diferenca:diff

     }
     return obj7
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array =[]
   for (let ii = 0; ii < n; ii++){
       aux = ii*2
       array.push(aux)
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangle 
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        triangle = "Equilátero"
    }
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        triangle = "Escaleno"
    }
    else {
        triangle = "Isósceles"
    }
    return triangle
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array = array.sort((a, b) => a - b);
    let arrayAux = [array[array.length-2],array[1]]
    return arrayAux
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let output = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
   return output
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const goodToGo1 = pessoas.filter((item, index, array) => {
        return item.altura >= 1.5
     })
     const goodToGo2 = goodToGo1.filter((item, index, array) => {
        return item.idade > 14
     })
     const goodToGo3 = goodToGo2.filter((item, index, array) => {
        return item.idade <= 60
     })
     return goodToGo3
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    // console.log(contas[0].compras)
    for (var ii = 0; ii < contas.length; ii++){
        var sumAux = 0
        for (let jj = 0; jj < contas[ii].compras.length; jj++) {
            sumAux = sumAux + contas[ii].compras[jj]
        }
        contas[ii].saldoTotal = contas[ii].saldoTotal - sumAux
        contas[ii].compras = []
    }
   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function sortName(a, b) {
        if ( a.nome < b.nome){
          return -1;
        }
        if ( a.nome > b.nome ){
          return 1;
        }
        return 0;
      }
      
      consultas.sort(sortName);
    return consultas  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    // function sortDate(a, b) {
    //     if ( a.dataDaConsulta < b.dataDaConsulta){
    //       return -1;
    //     }
    //     if ( a.dataDaConsulta > b.dataDaConsulta){
    //       return 1;
    //     }
    //     return 0;
    //   }
      
    //   consultas.sort(sortDate);

    // const consultasData = consultas.sort((a,b) => b.dataDaConsulta -a.dataDaConsulta)
    var day =[0]
    var month =[0]
    var year =[0]

    for (var ii = 0; ii < consultas.length; ii++){
        var numAux = consultas[ii].dataDaConsulta
        // var dayAux = Number(numAux.slice(0,2)); day = day.push(dayAux) 
        // var monthAux = Number(numAux.slice(3,5)); month = month.push(monthAux)
        // var yearAux = Number(numAux.slice(6,10)); year = year.push(yearAux)
        var dayAux = numAux.slice(0,2); day = day.push(dayAux) 
        var monthAux = numAux.slice(3,5); month = month.push(monthAux)
        var yearAux = numAux.slice(6,10); year = year.push(yearAux)
    }


    return year
}

// revisar:desafio 2 e desafio 3
// terminar 13B e 15B