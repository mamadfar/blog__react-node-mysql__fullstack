import {FC, ReactNode, useCallback, useContext, useReducer} from "react";
import AuthContext from "../context/AuthContext";
import Cookie from "js-cookie";
import {AUTH_ACTION} from "../model/auth.model";
import {loginService, logoutService} from "../services/auth.service";
import {IUser} from "../model/user.model";
import {useNavigate} from "react-router-dom";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("Something went wrong!");

    return context;
};

interface IInitialState {
    user: IUser
}

const initialState: IInitialState = {
    user: {
        username: "",
        password: "",
        email: ""
    }
}

const authReducer = (state: typeof initialState, action: AUTH_ACTION) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.payload}
        default:
            return state;
    }
}

const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    // const navigate = useNavigate();

    const value = {
        ...state,
        login: useCallback(async (user: Omit<IUser, "email">) => {
            const {data, status, headers} = await loginService(user);
            if (status === 200) {
                dispatch({type: "LOGIN", payload: data});
                // navigate("/")
                // Cookie.set("access_token", headers["Set-Cookie"])
                // console.log()
            }
        }, []),
        logout: useCallback(async () => {
            // const {data, status} = await logoutService();
            // dispatch({type: "LOGIN", payload: data})
        }, [])
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;
