import { useEffect, useReducer } from "react"
import authReducer from "./reducers/authReducer"
import type { AuthState, User } from "../interfaces"
import AuthContext from './AuthContext';


const initialState: AuthState = {
    status: "not-authenticated",
    user: null,
    token: null,
}


const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {

        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')

        if (!token || !user) {
            dispatch({ type: "logout" });
            return;
        }

        try {
            const parsedUser = JSON.parse(user);
            dispatch({ type: 'login', payload: { user: parsedUser, token } });

        } catch (error) {
            dispatch({ type: 'logout' });
        }
    }, []);

    const login = (user: User, token: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'login', payload: { user, token } })
        
    }

    const checking = () => {
        dispatch({ type: "checking" })
    }

    const logout = () => {
        localStorage.clear();
        dispatch({ type: 'logout' });
    }


    return (
        <AuthContext.Provider
            value={{
                ...state, login, logout, checking
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;