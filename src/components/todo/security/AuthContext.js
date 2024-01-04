import { createContext, useContext, useState } from "react";

//1. Create context
export const AuthContext =  createContext()

export const useAuth = () => useContext(AuthContext)

//2. Share the created context with other component

export function AuthProvider({ children }) {

    //3. Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if (username === 'admin' && password === 'admin123') {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
            { children }
        </AuthContext.Provider>
    );
}