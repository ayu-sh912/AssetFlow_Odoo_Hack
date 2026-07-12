import api from "../lib/api";

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export const AuthService = {
    login(data: LoginPayload) {
        return api.post("/auth/login", data);
    },

    register(data: RegisterPayload) {
        return api.post("/auth/register", data);
    },

    me() {
        return api.get("/auth/me");
    },

    logout() {
        return api.post("/auth/logout");
    },

    refresh(refreshToken: string) {
        return api.post("/auth/refresh", {
            refreshToken,
        });
    },
};