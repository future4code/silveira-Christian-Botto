import { Request, Response } from "express";
import { generateId } from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };
  
      const id = generateId();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword, userData.role);
  
      const token = Authenticator().generateToken({
        id,
        role: userData.role,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

