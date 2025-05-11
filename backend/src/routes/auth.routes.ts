import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
import { body } from 'express-validator';
import { isValidPassword } from '../utils';
import { validateFields } from '../middlewares';

const router: Router = Router();

router.post('/register', [

    body('email')
        .isEmail().withMessage('Email invalido'),

    body('password')
        .notEmpty().withMessage('La contraseña es requerida')
        .custom(isValidPassword).withMessage('La contraseña debe tener blabla caracteres'),

    body('name')
        .notEmpty().withMessage('El nombre es requerido'),

    body('lastname')
        .notEmpty().withMessage('El apellido requerido'),

    validateFields


], register);

//Login
router.post('/login', [

    body('email')
        .notEmpty().withMessage('El email es requerido'),

    body('password')
        .notEmpty().withMessage('La contraseña es requerida'),
    validateFields
], login);


export default router;
