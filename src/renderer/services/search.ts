import axiosCustom from "../plugins/axios";

export default {
    search(token: string, search: string) {
       return axiosCustom.post('/search', {
           token: token,
           search: search
        })
    },
}