// HERANÇA

// 1-
// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;

//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string
//     ) {
//         console.log("Chamando o construtor da classe User")
//         this.id = id
//         this.email = email
//         this.name = name
//         this.password = password
//     }

//     public getId(): string {
//         return this.id
//     }

//     public getEmail(): string {
//         return this.email
//     }

//     public getName(): string {
//         return this.name
//     }

//     public introduceYourself(): string {
//         return `Olá, sou ${this.name}, bom dia!`
//     }
// }

// const Chris = new User("1", "chris@chris.com", "chris", "chrisss")

// //a) Não, pois é privado.
// // b) Uma

// // 2 - 
// class Customer extends User {
//     public purchaseTotal: number = 0;
//     private creditCard: string;

//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string,
//         creditCard: string
//     ) {
//         super(id, email, name, password);
//         console.log("Chamando o construtor da classe Customer");
//         this.creditCard = creditCard;
//     }

//     public getCreditCard(): string {
//         return this.creditCard;
//     }
// }

// const Chris2 = new Customer("2", "chris2@chris2.com", "chris2", "chrisss2", "2832743743")

// // a) Duas, porque customer é filho de user, entãso ele chama ela também.
// // b) Uma, porque customer só é chamado uma vez

// // 3 - 
// console.log(Chris2.getId())
// console.log(Chris2.getEmail())
// console.log(Chris2.getName())
// console.log(Chris2.getCreditCard())

// // a) Não, pois não foi criado um método para dispô-la fora do contexto da classe pai

// // 4 - 

// console.log(Chris2.introduceYourself())

// // 5 - 

// console.log(Chris2.introduceYourself())

// POLIMORFISMO

// 1 -
export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(client.name)
  console.log(client.registrationNumber)
  console.log(client.consumedEnergy)
  console.log(client.calculateBill())

  // a) Todas imprimiram

  // 2 -
  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  // a)
//   const Test = new Place
  // Diz que não pode criar uma instância de uma classe abstrata 

  // b) Podemos criar uma classe filha que não seja abstrata

  // 3 - 
  export class Residence extends Place {
    constructor(
      private residentsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getResidentsQuantity(): number {
      return this.residentsQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }

  // 4 - 
  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

  // a) Possui os métodos de recupear CPF (exclusivo de pessoas) e um método exclusivo de 
  // calcular a conta de energia, que é diferente a taxa paga por tipo
  // de ocupação.

  // 5 -

  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }

  // a) e b) É semelhante na forma de pegar um documento de identificação
  // (que aqui é o CNPJ) e também de calcular uma conta de luz (com uma taxa diferente)

  // 6 -

  class IndustrialClinet extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }

  // a) Industry, já que possui quantidade de maquinas
  // b) Client, pois todos são clientes
  // c)