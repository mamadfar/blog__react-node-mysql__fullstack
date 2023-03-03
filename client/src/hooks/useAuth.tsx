import {FC, ReactNode, useCallback, useContext, useReducer} from "react";
import AuthContext from "../context/AuthContext";
import {AUTH_ACTION} from "../model/auth.model";
import {loginService, logoutService} from "../services/auth.service";
import {IUser} from "../model/user.model";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Something went wrong!");

    return context;
};

interface IInitialState {
    user: IUser,
    // status: "undetermined" | "pending" | "fulfilled" | "rejected"
}

const initialState: IInitialState = {
    user: JSON.parse(localStorage.getItem("user") as string),
}

const authReducer = (state: typeof initialState, action: AUTH_ACTION) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("user", JSON.stringify(action.payload));
            return {...state, user: action.payload}
        }
        case "LOGOUT": {
            localStorage.removeItem("user");
            return {...state, user: ""}
        }
        default:
            return state;
    }
}

const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const value = {
        ...state,
        login: useCallback(async (user: Omit<IUser, "email">) => {
            const {data, status} = await loginService(user);
            if (status === 200) {
                dispatch({type: "LOGIN", payload: data});
            }
            return status;
        }, [dispatch]),
        logout: useCallback(async () => {
            const {status} = await logoutService();
            if (status === 200) dispatch({type: "LOGOUT"});
        }, [])
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;
