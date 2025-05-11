import { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react';
import type { FieldError, UseFormRegister } from 'react-hook-form';
import '../styles/AuthStyles.css'
import { InputErrorMessage } from './InputErrorMessage';






interface Props {
    register: UseFormRegister<any>,
    placeholder?: string
    passwordError?: FieldError
    type?: 'login' | 'register'
}


export const PasswordInput = ({
    placeholder = 'Your password',
    register,
    passwordError,
    type = 'register'
    }: Props) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const alternatePasswordType = () => {
        setIsPasswordVisible(!isPasswordVisible);
        console.log({ isPasswordVisible });
    }


    return (
        <div className="grid relative">
            <label htmlFor="password" className="mb-2 font-medium text-lg">
                Password:
            </label>
            <input

                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder={placeholder}
                className="input"
                {...register('password', {
                    required: 'La contraseña es requerida',
                    //Si el tipo de input es de registro muestra la segunda validación
                    ...(type === 'register' && {
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: 'Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo'
                        }
                    })

                })}
            />
            {passwordError && <InputErrorMessage>{passwordError.message}</InputErrorMessage>}
            <button
                type='button'
                className='btnPasswordEye'
                onClick={alternatePasswordType}
            >
                {isPasswordVisible
                    ? <Eye />
                    : <EyeClosed />
                }
            </button>
        </div>
    )
}
