import axios from 'axios'

var axiosCustom = axios.create({
    baseURL: import.meta.env.VITE_BASE_URI,
    headers: {},
    withCredentials: true,
})

export default axiosCustom;