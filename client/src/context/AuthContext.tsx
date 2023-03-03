import {Context, createContext} from "react";
import {IUser} from "../model/user.model";

interface IAuthContext {
    user: IUser,
    login: (user: Omit<IUser, "email">) => any,
    logout: () => any
}

const AuthContext = createContext<IAuthContext>({
    user: {
        username: "",
        email: "",
        password: ""
    },
    login: (user) => {},
    logout: () => {}
});

export default AuthContext;
