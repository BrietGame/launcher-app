import axiosCustom from "../plugins/axios";

export default {
    login(username: string, password: string) {
       return axiosCustom.post('/login', {
            username: username,
            password: password
        })
    },
    refresh(access_token: string, refreshToken: string) {
        return axiosCustom.post('/refresh', {
            access_token: access_token,
            refreshToken: refreshToken
        })
    },
    logout(token: string) {
        return axiosCustom.post('/logout', {
            token: token
        })
    }
}