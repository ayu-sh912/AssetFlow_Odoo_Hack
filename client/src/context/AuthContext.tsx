import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import { AuthService } from "../services/auth.service";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: () => Promise<void>;
    logout: () => void;
}

const AuthContext =
    createContext<AuthContextType>(
        {} as AuthContextType
    );

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] =
        useState<User | null>(null);

    const [loading, setLoading] =
        useState(true);

    async function login() {
    setLoading(true);

    try {
        const response = await AuthService.me();

        setUser(response.data.data);
    } catch {
        setUser(null);
    } finally {
        setLoading(false);
    }
}

    function logout() {
        localStorage.removeItem(
            "accessToken"
        );

        localStorage.removeItem("user");

        setUser(null);
    }

    useEffect(() => {
        login();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}