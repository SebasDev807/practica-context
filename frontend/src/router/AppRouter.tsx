import { Navigate, Route, Routes } from 'react-router'
import { AuthRoutes } from '../auth';
import { HomeRoutes } from '../home';
import { useAuthContext } from '../context';


export const AppRouter = () => {
    
    const { authStatus } = useAuthContext();

    return (

        <Routes>
            {authStatus === "authenticated" ? (
                // Si está autenticado, mostrar rutas principales
                <>
                    <Route path="/*" element={<HomeRoutes />} />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </>

            ) : (
                // Si NO está autenticado, ir a login
                <>
                    <Route path="/auth/*" element={<AuthRoutes />} />
                    <Route path="/*" element={<Navigate to="/auth/login" />} />
                </>
            )}
        </Routes>
    );
};
