/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// Boas vindas
console.log("Boas vindas ao jogo de Blackjack!")
// Começo do jogo
if(confirm("Quer iniciar uma nova rodada?")) {
	console.log("Certo. Vamos começar uma nova rodada!")

   // Retirada de cartas do usuário e checar se vem dois A's
   const cardUser1 = comprarCarta();
   const cardUser2 = comprarCarta();
   if(cardUser1.texto.includes("A") && cardUser2.texto.includes("A")) {
      while (cardUser1.texto.includes("A") && cardUser2.texto.includes("A")){
         const cardUser1 = comprarCarta();
   const cardUser2 = comprarCarta();
         }
    }
   let cardUserArray = [cardUser1, cardUser2] // Salva aos objetos em uma array

   // Retirada de cartas do computador e checar se vem dois A's
   const cardComp1 = comprarCarta();
   const cardComp2 = comprarCarta();
   if(cardComp1.texto.includes("A") && cardComp2.texto.includes("A")) {
      while (cardComp1.texto.includes("A") && cardComp2.texto.includes("A")){
         const cardComp1 = comprarCarta();
   let cardComp2 = comprarCarta();
         }
   }

   // Confirmação de compra do usuário
   // Criar uma nova array apenas com as strings dos textos usando map:
   var textCardsUser = cardUserArray.map((item, index, array) => { 
      return item.texto
   })

   var sumArrayUser = cardUser1.valor + cardUser2.valor // Inicia o valor total caso não ente no loop
   var sumArrayComp = cardComp1.valor + cardComp2.valor  // Ou seja, caso o usuário aperte cancel na primeira rodada

   while (confirm(`Suas cartas são ${textCardsUser}. A carta revelada do computador é ${cardComp1.texto} `)) {
      const cardCompAux = comprarCarta();
      cardUserArray = cardUserArray.concat(cardCompAux) // Concatena as arrays
         // Criar uma nova array apenas com as strings dos textos usando map (de novo):
         var textCardsUser = cardUserArray.map((item, index, array) => {
            return item.texto
      }) 
      // Calcula somatório das cartas
      // Criar uma nova array apenas com os valores das cartas:
         var valueCardsUser = cardUserArray.map((item, index, array) => {
            return item.valor
      })
      for(let ii = 2; ii < valueCardsUser.length  ; ii++){
         sumArrayUser = sumArrayUser + valueCardsUser[ii] 
     } 
     // Vamos comparar se é menor ou igual a 21
      if (sumArrayUser >21) {
         break
      }
   } 

   // Vez do computador
   let cardCompArray = [cardComp1, cardComp2] // Salva aos objetos em uma array

   // Confirmação de compra do computador
   // Criar uma nova array apenas com as strings dos textos usando map:
   var textCardsComp = cardCompArray.map((item, index, array) => { 
      return item.texto
   })
   while (sumArrayComp < sumArrayUser) { // Vamos comparar se é maior ou igual ao valor do usuário (o contrário de >= é <)
      const cardCompAux = comprarCarta();
      cardCompArray = cardCompArray.concat(cardCompAux) // Concatena as arrays
         // Criar uma nova array apenas com as strings dos textos usando map (de novo):
         var textCardsComp = cardCompArray.map((item, index, array) => {
            return item.texto
      }) 
      // Calcula somatório das cartas
      // Criar uma nova array apenas com os valores das cartas:
         sumArrayComp = sumArrayComp + cardCompAux.valor
   } 

   const cardUserTotal = sumArrayUser // Salvando a mesma variável apenas por clareza
   const cardCompTotal = sumArrayComp // Salvando a mesma variável apenas por clareza

   console.log(`Usuário - cartas:  ${textCardsUser} - pontuação: ${cardUserTotal}`)  
   console.log(`Computador - cartas:  ${textCardsComp}- pontuação: ${cardCompTotal}`)     

   if (cardUserTotal>21){
      console.log(`O computador ganhou!`)
   } else if(cardUserTotal<cardCompTotal && cardUserTotal<=21 && cardCompTotal<=21) {
         console.log(`O computador ganhou!`)  
   } else if(cardUserTotal<cardCompTotal && cardUserTotal<=21 && cardCompTotal>21) {
         console.log(`O usuário ganhou!`)       
   } else if(cardUserTotal>cardCompTotal && cardUserTotal<=21) {
      console.log(`O usuário ganhou!`)  
   } else if(cardUserTotal<=21 && cardCompTotal>21) {
      console.log(`O usuário ganhou!`) 
   } else if(cardUserTotal===cardCompTotal) {
      console.log(`Empate!`)
   }else {
	console.log("O jogo acabou. Até a próxima!")
 }
}
