import { Request, Response } from "express";
import { generateId } from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = generateId();
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = new Authenticator().generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
}