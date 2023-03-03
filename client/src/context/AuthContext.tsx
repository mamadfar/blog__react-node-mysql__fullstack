import {createContext} from "react";
import {IUser} from "../model/user.model";

interface IAuthContext {
    user: IUser,
    login: (user: Omit<IUser, "email">) => unknown,
    logout: () => any
}

const AuthContext = createContext<IAuthContext>({
    user: JSON.parse(localStorage.getItem("user") as string),
    login: (user) => {},
    logout: () => {}
});

export default AuthContext;
