import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const AuthContext =  createContext()

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    /* function login(username, password) {
        if (username === 'in28minutes' && password === 'dummy') {
            setAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    } */

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {
            const response = await executeBasicAuthenticationService(baToken)

            if (response.status === 200) {
                setAuthenticated(true);
                setUsername(username);
                return true;
            } else {
                setAuthenticated(false);
                setUsername(null);
                return false;
            }
        } catch (error) {
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