import { createContext } from "react";
import type { AuthStatus, User } from "../interfaces";


export interface AuthContextType {
    status: AuthStatus;
    user: User | null;
    token: string | null;
    login: (user: User, token: string) => void;
    logout: () => void;
    checking: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;