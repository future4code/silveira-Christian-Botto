
import express, { Express } from 'express'
import { Request, Response } from "express";
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

// 1-
type user = {
    name: string;
    cpf: number;
    birth: string;
};

// 2-
let users: user[] = []

// 3-
type transfer = {
    nameSend: string;
    cpfSend: number;
    nameReceive: string;
    cpfReceive: number;
    amount: number;
};

// 4- Mão Sei


// 5 and 8-
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const { name, cpf, birth } = req.body;  
      if (!name || !cpf || !birth) {
        errorCode = 422;
        throw new Error("Please check the fields!");
      }  
      // Age Verification
      let age:number = 2022 - Number(birth.slice(6,9)); // DD/MM/YYYY
      if (age<18) { 
        errorCode = 444;
        throw new Error("You must be over 18 years of age");
      }  
      //
      const newUser: user = {
        name,
        cpf,
        birth,
      };  
      users.push(newUser);  
      res.status(201).send({ message: "User created successefully" });
    } catch (error: any) {
      res.status(errorCode).send({ messagem: error.message });
    }
  });

  // 6-
  app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      res.status(200).send(users);
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message });
    }
  });





const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});