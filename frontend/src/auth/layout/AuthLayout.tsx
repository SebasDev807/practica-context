import '../styles/AuthStyles.css';
import { ShieldUser } from 'lucide-react';
import { Loader } from '../../components';
import { useAuthContext } from '../../context';


export const AuthLayout =
    ({ children }: { children: React.ReactNode }) => {

        const { authStatus } = useAuthContext();

        return (
            <div className="authLayout">
                <div className='formContainer'>

                    <div className='flex justify-center m-2 text-slate-800'>

                        {authStatus === "checking"
                            ? (<Loader />)
                            : (<ShieldUser size={100} />)
                        }
                    </div>

                    {children}

                </div>

            </div>
        )
    }
