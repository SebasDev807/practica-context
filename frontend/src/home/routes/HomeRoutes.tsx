import { Navigate, Route, Routes } from "react-router"
import { DashboardPage } from "../pages/DashboardPage"

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<DashboardPage />} />
            {/* De esta manera evitamos que se pierda la ruta */}
            <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>
    )
}
