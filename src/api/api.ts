import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}
});

export const API = {
    getUsers(currentPage: number = 1, pageSize: number = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/` + userId)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/` + userId)
    },
    me() {
        return instance.get(`auth/me`)
    },
    profile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}