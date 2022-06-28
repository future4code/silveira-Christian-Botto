import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";

export default async function login(req: Request, res: Response): Promise<void> {

    app.post("/login", async (req: Request, res: Response) => {
        try {
          if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
          }
      
          const userData = {
            email: req.body.email,
            password: req.body.password,
          };
      
          const user = await getUserByEmail(userData.email);
      
          const compareResult = await compare(
            userData.password,
            user.password
          );
      
          if (!compareResult) {
            throw new Error("Invalid password");
          }
      
          const token = Authenticator().generateToken({
            id: user.id,
            role: user.role,
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

export type authenticationData = {
    id: string
 }