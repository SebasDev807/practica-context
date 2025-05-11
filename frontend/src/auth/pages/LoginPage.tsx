import { Link } from "react-router"
import { AuthLayout } from "../layout/AuthLayout"
import { PasswordInput } from "../components/PasswordInput"
import { useForm } from "react-hook-form"
import { useAuthContext } from "../../context"
import { InputErrorMessage } from "../components/InputErrorMessage"




const initialvalues = {
  email: 'test@gmail.com',
  password: 'Se3122103834..',

}

interface FormLogin {
  email: string;
  password: string;
}

export const LoginPage = () => {


  const { register, formState: { errors }, handleSubmit } = useForm<FormLogin>({ defaultValues: initialvalues })

  const { startLogin } = useAuthContext();

  const handleLogin = (formData: FormLogin) => {

    console.log('Iniciando sesión...')
    startLogin(formData);

  }


  return (

    <AuthLayout>

      <form className="form" onSubmit={handleSubmit(handleLogin)}>

        <div className="grid input-container">
          <label htmlFor="email" className="mb-2 font-medium text-lg">
            Email:
          </label>
          <input
            type="email"
            placeholder="Your Email"
            id="email"
            className="input"
            {...register('email', {
              required: 'El email es requerido'
            })}
          />
          {errors.email && <InputErrorMessage>{errors.email.message}</InputErrorMessage>}
        </div>


        <PasswordInput
          register={register}
          passwordError={errors.password}
          type="login"
        />


        <input type="submit" value="Login" className="btnlogin" />
        <Link to="/auth/register" className="linkTo">Register</Link>
      </form>
    </AuthLayout>

  )
}
