import {createStore} from "vuex";
import authService from "./services/auth";
import searchService from "./services/search";

export const store = createStore({
    state: () => {
        return {
            accessToken: null,
            refreshToken: null,
            isConnected: false,
            searchList: []
        }
    },
    actions: {
        login({commit}, {username, password}) {
            return new Promise((resolve, reject) => {
                authService.login(username, password)
                    .then((res) => {
                        console.log(res)
                        if (res.status === 200 && res.data != null) {
                            commit("SET_ACCESS_TOKEN", res.data.access_token)
                            commit("SET_REFRESH_TOKEN", res.data.refreshToken)
                            commit("SET_CONNECTED", true)
                        }
                        resolve(res)
                    })
                    .catch((err) => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        addSearchList({commit}, {accessToken, search}) {
            return new Promise((resolve, reject) => {
                searchService.search(accessToken, search).then((res) => {
                    commit("ADD_SEARCH_LIST", res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                });
            });
        }
    },
    getters: {
        getAccessToken: state => state.accessToken,
        getRefreshToken: state => state.refreshToken,
        isConnected: state => state.isConnected,
        getSearchList: state => state.searchList
    },
    mutations: {
        SET_ACCESS_TOKEN(state, newState) {
            state.accessToken = newState;
        },
        SET_REFRESH_TOKEN(state, newState) {
            state.refreshToken = newState;
        },
        SET_CONNECTED(state, newState) {
            state.isConnected = newState
            console.log("SET_CONNECTED", state.isConnected)
        },
        ADD_SEARCH_LIST(state, newState) {
            // @ts-ignore
            state.searchList = newState
        }
    }
})