import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(false);

    const loginOn= () => {
        setToken(true)
    }
    const logout = () => {
        console.log('sesion cerrada')
        setToken(false);
    }
    return (
        <UserContext.Provider value={{ token, logout, loginOn }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;