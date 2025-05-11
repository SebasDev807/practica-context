import { Request, Response } from 'express';
import { User } from '../models';
import { compareSync } from 'bcryptjs';
import { generateJwt } from '../utils/generateJwt';

const register = async (req: Request, res: Response) => {

    const { email } = req.body;

    try {

        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(409).json({
                error: `El usuario con el email ${email} ya existe.`
            });

        }

        const user = new User(req.body);
        await user.save();


        res.status(201).json({
            message: 'Usuario creado con exito.',
            user
        })


    } catch (error) {

        console.error(`[auth/register], ${error.message}`)

        res.status(500).json({
            error: 'Something went wrong'
        })
    }

}

const login = async (req: Request, res: Response) => {

    const { password, email } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({
            error: `No existe un usuario con email ${email}`
        });

        if (!compareSync(password, user.password)) {
            return res.status(401).json({
                error: 'Credenciales invalidas'
            });
        }

        const token = await generateJwt({ id: user._id });

        return res.status(200).json({
            ok: true,
            user,
            token
        })


    } catch (error) {

        console.error(error)

        res.status(500).json({
            msg: 'Something went wrong'
        })
    }

}


export {
    register,
    login
}