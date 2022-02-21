// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const h = Number(prompt('Digite a altura do retangulo'))
  const l = Number(prompt('Digite a largura do retangulo'))
  let areaRec = h*l

  console.log(areaRec)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const yearNow = Number(prompt('Digite em que ano estamos'))
  const yearBirth = Number(prompt('Digite o ano que nasceu'))
  let age = yearNow-yearBirth

  console.log(age)
}

// EXERCÍCIO 03
function calculaIMC(var1, var2) {
  // implemente sua lógica aqui
  let bmi = var1/(var2*var2)

  return bmi
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nameUser = prompt('Digite seu nome')
  const ageUser = Number(prompt('Digite sua idade'))
  const emailUser = prompt('Digite seu email')

  let sentence = (`Meu nome é ${nameUser}, tenho ${ageUser} anos, e o meu email é ${emailUser}.`)

  console.log(sentence)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const colorOne = prompt('Digite sua cor favorita número 1')
  const colorTwo = prompt('Digite sua cor favorita número 2')
  const colorThree = prompt('Digite sua cor favorita número 3')


  let arrayColors = [colorOne, colorTwo, colorThree]

  console.log(arrayColors)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  // lossThreshold = custo - numberTickets*valorIngresso -> lossThreshold = 0
  let numberTickets = custo/valorIngresso
  return numberTickets

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let answer = string1.length === string2.length
return answer

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let arrayLength = array.length - 1
  return array[arrayLength]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let arrayLength = array.length -1
  let arrayAux1 = array[0]
  let arrayAux2 = array[arrayLength]
array[0] = arrayAux2
array[arrayLength] = arrayAux1
return array

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let answer = string1.toUpperCase() === string2.toUpperCase()
  return answer
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const yearUser = Number(prompt('Digite em que ano estamos'))
  const birthUser = Number(prompt('Digite seu ano de nascimento'))
  const idUser = Number(prompt('Digite o ano de emissão de sua identidade'))

  let ageUser = yearUser-birthUser
  let timeSpan = yearUser-idUser

  let statementOne = ageUser<=20
  let statementTwo = 20<ageUser<=50
  let statementThree = ageUser>50

  let renovation

  if(statementOne === true) {
    if (timeSpan >=5) {
      renovation = true
    } else{
      renovation = false
    }
    console.log(renovation)
    return
  }
  if(statementTwo === true) {
    if (timeSpan >=10) {
      renovation = true
    } else{
      renovation = false
    }
  }
  if(statementThree === true) {
    if (timeSpan >=15) {
      renovation = true
    } else{
      renovation = false
    }
  }
  console.log(renovation)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let statementOne = ano%400 === 0
  let statementTwo = ano%4 === 0 

let bisex = 0

 if (statementOne === true){
    bisex = bisex + 1
}
if (statementTwo === true){
  bisex = bisex + 1
  if (ano%100 ===0 && ano%400 !==0){
  bisex = bisex - 1}
}

if (bisex > 0){
  return true
} else {
  return false
}
}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const questionOne = prompt('Você tem mais de 18 anos?')
  const questionTwo = prompt('Você possui ensino médio completo?')
  const questionThree = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  let answerOne = questionOne === ("sim")
  let answerTwo = questionTwo === ("sim")
  let answerThree = questionThree === ("sim")

  // let finalAnswer 

  // if (answerOne === true && answerTwo === true && answerThree=== true) {
  //   finalAnswer  = true
  // }else{
  //   finalAnswer  = false
  // }
  // console.log(finalAnswer)

  let finalAnswer = answerOne === true && answerTwo === true && answerThree=== true
  console.log(finalAnswer)

}
