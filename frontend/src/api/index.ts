import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});


//Enviar token si se necesita




export default api;
