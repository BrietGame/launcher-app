import axiosCustom from "../plugins/axios";

export default {
    login(username: string, password: string) {
       return axiosCustom.post('/login', {
            username: username,
            password: password
        })
    }
}