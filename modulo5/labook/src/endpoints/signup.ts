import { UserDatabase } from './../data/UserDatabase';
import { IdGenerator } from './../services/idGenerator';
import { Request, Response } from 'express';

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password, role = req.body } = req.body

        if (!name || !email || !password || !role) {
            res
            .status(422)
            .send(
                "All fields are mandatory"
                )
        }

        const userDatabase = new UserDatabase()
        const user = userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409)
            .send("Email already exists") 
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}