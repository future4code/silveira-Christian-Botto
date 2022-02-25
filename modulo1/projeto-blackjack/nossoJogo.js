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
console.log("Boas vindas ao jogo de Blackjack!")
// 
if(confirm("Quer iniciar uma nova rodada?")) {
	console.log("Certo. Vamos começar uma nova rodada!")
   //
   const cardUser1 = comprarCarta();
   const cardUser2 = comprarCarta();
   const cardComp1 = comprarCarta();
   const cardComp2 = comprarCarta();

   const cardUserTotal = cardUser1.valor + cardUser2.valor 
   const cardCompTotal = cardComp1.valor + cardComp2.valor

   console.log(`Usuário - cartas:  ${cardUser1.texto} ${cardUser2.texto} - pontuação: ${cardUserTotal}`)  
   console.log(`Computador - cartas:  ${cardComp1.texto} ${cardComp2.texto}- pontuação: ${cardCompTotal}`)     

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

