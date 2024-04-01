import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { changeLocalStorage, changeUserStorage } from "../services/storage";
import { AppContext } from "./AppContext";
import { api } from "../api";

interface IValidate {
    validateUser: (email: string, password: string) => void
}

export const ValidateContext = createContext({} as IValidate);

export const ValidateContextProvider = ({ children }: any) => {
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, password: string): Promise<void> => {
        const loggedIn = await login(email, password);
        const user: any = await api;
        if (!loggedIn) {
            return alert("Credenciais inválidas.")
        };
        setIsLoggedIn(true);
        changeLocalStorage({ login: true })
        changeUserStorage({ email: user.email, password: user.password, name: user.name, balance: user.balance, id: user.id })
        navigate("/conta/1")
    };

    return (
        <ValidateContext.Provider value={{ validateUser }}>
            {children}
        </ValidateContext.Provider>
    )
}

