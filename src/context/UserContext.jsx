import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    const loginOn = async (email, password) => {
        const rest = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await rest.json();
       if (!rest.ok || !data.token) {
            return null;
           
        }
        if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        }
        return data;
    };
    
    const register = async (email, password) => {
        
        const rest = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password}),
        });
        const data = await rest.json();
        if (data.token) {
            setToken(data.token);
            setEmail(email);
        }
            return data;
        };
        
        const logout = () => {
            setToken("");
            setEmail("");
        };
        const getProfile = async () => {
            if (!token) return null;
            const rest = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await rest.json();
            if (data.email) {
                setEmail(data.email);
            }
            return data;
        };
    return (
        <UserContext.Provider value={{ token, email, loginOn, register, logout, getProfile }}>          
            {children}
        </UserContext.Provider>
    );
};



export default UserContext;