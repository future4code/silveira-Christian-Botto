import * as userDatabase from '../data/userDatabase'

class UserBussines {

    async createUser(user) {

        try {

            if (!user.name || !user.email || !user.password || !user.role) {
                throw new Error("Please fill all the fields");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Invalid Email");
            }

            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters");
            }

            const id = generateId();
            const hashPassword = await hash(user.password);
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
            const token = generateToken({ id, role });

            return token;

        } catch (error) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }



    async getUserByEmail(user) {


        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashCompare = await compare(user.password, userFromDB.getPassword());

        const accessToken = generateToken({ id: userFromDB.getId() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }

}