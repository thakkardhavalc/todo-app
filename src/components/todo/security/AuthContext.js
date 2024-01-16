import { createContext, useContext, useState } from "react";

export const AuthContext =  createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    function login(username, password) {
        if (username === 'admin' && password === 'admin123') {
            setAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout, username } }>
            { children }
        </AuthContext.Provider>
    );
}