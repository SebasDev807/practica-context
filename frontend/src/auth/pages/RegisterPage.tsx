import { Link, useNavigate } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { PasswordInput } from "../components/PasswordInput";
import { useForm } from 'react-hook-form';
import { InputErrorMessage } from "../components/InputErrorMessage";
import api from "../../api";
import { isAxiosError } from "axios";
import { alert } from "../../utils";

interface FormRegister {
    email: string;
    password: string;
    name: string;
    lastname: string;
}


const defaultValues = {
    email: 'test@gmail.com',
    password: 'Se3122103834..',
    name: 'test',
    lastname: 'tester',
}
export const RegisterPage = () => {


    const { register, formState: { errors }, handleSubmit } = useForm<FormRegister>({ defaultValues });

    const navigate = useNavigate();

    const handleRegister = async (data: FormRegister) => {
        try {
            const response = await api.post('/auth/register', data);

            const { message } = response.data;

            const result = await alert.success('Registro exitoso', message, 'regresar al inicio');

            if(result.isConfirmed) navigate('/login');

        } catch (error) {

            if (isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.error;
                alert.error('Error al registrar usuario', errorMessage);
            }
        }
    }

    return (
        <AuthLayout>
            <form className="form" onSubmit={handleSubmit(handleRegister)}>
                {/* Campo Email */}
                <div className="grid input-container">
                    <label htmlFor="email" className="mb-2 font-medium text-lg">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder="Tu email"

                        {...register('email', {
                            required: 'El email es requerido',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email invalido '
                            }
                        })}

                    />
                    {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
                </div>

                {/* Campo Nombre */}
                <div className="grid input-container">
                    <label htmlFor="name" className="mb-2 font-medium text-lg">
                        Nombre:
                    </label>
                    <input
                        placeholder="Tu nombre"
                        type="text"
                        id="name"
                        className="input"
                        {...register('name', {
                            required: 'Tu nombre es requerido'
                        })}
                    />
                    {errors.name && <InputErrorMessage>{errors.name.message}</InputErrorMessage>}

                </div>

                {/* Campo Apellido */}
                <div className="grid input-container">
                    <label htmlFor="lastname" className="mb-2 font-medium text-lg">
                        Apellido:
                    </label>
                    <input
                        placeholder="Tu apellido"
                        type="text"
                        id="lastname"
                        className="input"
                        {...register('lastname', {
                            required: 'Tu apellido es requerido'
                        })}
                    />
                    {errors.lastname && <InputErrorMessage>{errors.lastname.message}</InputErrorMessage>}

                </div>

                {/* Componente Password */}
                <PasswordInput
                    register={register}
                    passwordError={errors.password}
                />

                <button type="submit" className="btnlogin">
                    Registrarse
                </button>

                <Link to="/auth/login" className="linkTo">
                    Volver al Login
                </Link>
            </form>
        </AuthLayout>
    )
}



