import { LayoutDashboard, CircleUserRound, Bell, BadgeHelp, LogOut } from "lucide-react"
import { SidebarItem } from "./SidebarItem"
import { useAuthContext } from "../../context";

const items = [
    {
        icon: <LayoutDashboard />,
        title: 'Inicio',
        path: "/"
    },

    {
        icon: <CircleUserRound />,
        title: 'Perfil',
        path: '/'
    },

    {
        icon: <Bell />,
        title: 'Notificaciones',
        path: '/'
    },
    {
        icon: <BadgeHelp />,
        title: 'Soporte',
        path: '/'
    },

]

export const Sidebar = () => {


    const { user, startLogout } = useAuthContext();

    const { name, photoUrl } = user!;

    console.log({ name, photoUrl });


    return (
        <aside className="sidebar">

            <div className="flex items-center gap-x-2">
                <img src={photoUrl} alt="foto de perfil" className="w-10 rounded-full m-2" />
                <h1 className="text-xl">{name}</h1>

            </div>
            {items.map(item =>

            (<SidebarItem
                {...item}
                key={item.title} />
            ))}

            <li className="list-none">
                <button
                    onClick={startLogout}
                    className="linkItem gap-x-2 text-lg cursor-pointer">

                    <LogOut />
                    Cerrar Sesión

                </button>
            </li>


        </aside>
    )
}
