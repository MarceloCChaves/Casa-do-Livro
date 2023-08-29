import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export default API;