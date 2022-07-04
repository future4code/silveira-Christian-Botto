import * as userBusiness from '../business/userBusiness'

class UserController {
    async signup(req: Request, res: Response) {


        try {
            const input = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await destroyConnection();
    }

    import * as userBusiness from '../business/userBusiness'

async login(req: Request, res: Response) {

    try {

        const loginData = {
            email: req.body.email,
            password: req.body.password
        };


        const token = await userBusiness.getUserByEmail(loginData);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

    await destroyConnection();
}
}

export default UserController