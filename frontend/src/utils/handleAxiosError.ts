import { isAxiosError } from "axios";
import { alert } from './alert';

export const handleAxiosError = (error: any, title: string) => {
    if (isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.error;
        console.log(errorMessage);
        alert.error(title, errorMessage);
    }
}