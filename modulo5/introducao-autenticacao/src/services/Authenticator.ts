import * as jwt from "jsonwebtoken";

export default class Authenticator {
    generateToken = (payload: AuthenticationData) => {
       return jwt.sign(
            payload,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "5h"
            }
        )
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        )

        return tokenData
    }
}

type AuthenticationData = {
  id: string;
}