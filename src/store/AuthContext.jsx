import { useContext, createContext, useState } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext({
    authData: {},
    setAuthData: {},
    isLoggedIn: false,
    login() {},
    logout() {},
});

export const AuthContextProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        loading: false,
        email: null,
        token: null,
    });
    const isLoggedIn = !!authData.token;

    const login = (token, email) => {
        setAuthData((s) => ({
            ...s,
            email: email,
            token: token,
        }));
        toast.success('Logged in');
        return true;
    };

    const logout = () => {
        setAuthData((s) => ({ ...s, email: null, token: null}));
        toast.success('Logged out');
    };

    return (
            <AuthContext.Provider
                value={{ authData, isLoggedIn, setAuthData, login, logout}}
            >
                {children}
            </AuthContext.Provider>
        );
}

export const useAuthContext = () => useContext(AuthContext);
