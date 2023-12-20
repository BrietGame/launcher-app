import axios from 'axios'
import auth from "../services/auth";

var axiosCustom = axios.create({
    baseURL: import.meta.env.VITE_BASE_URI,
    headers: {},
    withCredentials: true,
})

// A chaque requête, on refresh le token pour l'ajouter dans le header BEARER
axiosCustom.interceptors.request.use(
    async config => {
        console.log('Request interceptor')
        const access_token = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refreshToken');
        if (access_token && refreshToken) {
            // Refresh token
            auth.refresh(access_token, refreshToken).then((response) => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
            }).catch((error) => {
                console.log(error);
            });
        } else {
            // Retourner à la page de login
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });

export default axiosCustom;