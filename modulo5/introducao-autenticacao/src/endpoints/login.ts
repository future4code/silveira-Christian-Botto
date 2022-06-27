import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";

export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            throw new Error("Por favor, preencha email e senha")
        }

        const [user] = await connection("to_do_list_users").where({email})

        if(!user || user.password !== password) {
            throw new Error("Credenciais de acesso são inválidas!")
        }

        const authenticator = new Authenticator()

        const payload: authenticationData = {
            id: user.id
        }

        const token = authenticator.generateToken(payload)

        res.status(201).send({token})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}

export type authenticationData = {
    id: string
 }