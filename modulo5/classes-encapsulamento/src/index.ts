
//EXERCICIO 1 =============================================
// a) 
//O constructor é uma função que serve para alterar os parâmetros. A chamamos com new.

// b)

//   class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }  

//     public getCpf(): string{
//         return this.cpf
//     }
//     public getName(): string {
//         return this.name
//     }

//     public getAge(): number{
//         return this.age
//     }
//     public getBalance(): number{
//         return this.balance
//     }
//   }
//   const chris = new UserAccount("14147",  "chris",  100)

// b) Foi chamado uma vez.

// c) Podemos acessar apenas dentro da classe com uma função pública.

// ex:

// public getCpf(): string {
// 	return this.cpf
// }

//EXERCICIO 2 =============================================
// type TransactionType = {
//     description: string,
//     value: number,
//     date: string
//   }

//   class Transaction {    
//     private description: string;
//     private value: number;
//     private date: string;
    
//     constructor(date: string, value: number, description: string) {
//       this.date = date;
//       this.value = value;
//       this.description = description
//     }

//     public getValue(): number{
//         return this.value
//     }

//     public getDesc(): string {
//         return this.description
//     }

//     public getDate(): string {
//         return this.date
//     }
//   }

  //   const chris = new Transaction("Restaurante",  80,  "10/10/2010")

//EXERCICIO 3 =============================================

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    //     public getCpf(): string{
//         return this.accounts.cpf
//     }
//     public getName(): string {
//         return this.accounts.name
//     }

//     public getAge(): number{
//         return this.accounts.age
//     }
//     public getBalance(): number{
//         return this.balance
//     }
  
  }