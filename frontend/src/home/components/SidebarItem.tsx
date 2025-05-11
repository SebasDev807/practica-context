import { Link } from "react-router";


interface Props {
    icon: React.JSX.Element,
    title: string;
    path: string;
}

export const SidebarItem = ({ icon, title, path }: Props) => {

    

    return (
        <li className="list-none">
            <Link
                to={path}
                className="linkItem"
            >
                {icon}
                <span className="ml-3 text-lg">{title}</span>
            </Link>
        </li>
    );
};
