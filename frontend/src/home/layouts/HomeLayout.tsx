import { Sidebar } from "../components/Sidebar"
import '../styles/HomeLayout.css';

interface Props {
    children: React.ReactNode
}

export const HomeLayout = ({ children }: Props) => {
    return (
        <div className="app-container">
            <Sidebar />
            <main className="main-content">

                {children}
            </main>
        </div>
    )
}
