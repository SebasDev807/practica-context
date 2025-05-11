import jwt, { JwtPayload } from "jsonwebtoken";

export const generateJwt = async(payload: JwtPayload) => {

    const SECRET = process.env.JWT_SECRET;

    if (!SECRET) throw new Error('No jwt secret provided');

    const token = await jwt.sign(payload, SECRET, {
        expiresIn: '1d'
    });

    return token;
}