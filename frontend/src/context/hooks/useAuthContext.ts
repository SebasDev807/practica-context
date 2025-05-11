import { useContext } from "react"
import AuthContext from "../AuthContext"
import type { LoginUser } from "../../interfaces"
import api from "../../api"
import { handleAxiosError } from "../../utils/handleAxiosError"


export const useAuthContext = () => {

    const authcontext = useContext(AuthContext)

    const { login, user, status, logout, checking } = authcontext;

    const startLogin = async ({ email, password }: LoginUser) => {

        try {
            checking();
            const response = await api.post('/auth/login', { email, password });
            const { data } = response;
            login(data.user, data.token);

        } catch (error) {
            handleAxiosError(error, 'Error al iniciar sesión');
        }
    }

    const startLogout = async () => {
        logout();
    }

    return {
        user,
        startLogin,
        startLogout,
        authStatus: status
    }
}
