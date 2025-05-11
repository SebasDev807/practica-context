import type { AuthState, User } from "../../interfaces";


//paso 2: crear reducer
type AuthAction =
    | { type: 'login', payload: { user: User; token: string } }
    | { type: 'logout' }
    | { type: 'checking' }


const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {

        case "login":

            return {
                ...state,
                status: 'authenticated',
                user: action.payload.user,
                token: action.payload.token
            }

        case "logout":

            return {
                status: 'not-authenticated',
                user: null,
                token: null
            }

        case "checking":

            return {
                ...state,
                status: 'checking',

            }

        default:
            return state;
    }



}

export default authReducer;