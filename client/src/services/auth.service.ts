import axios from "axios";
import {IUser} from "../model/user.model";
import API from "./../config/API";

export const registerService = (newUser: IUser) => {
    return API.post("/auth/register", newUser);
}
export const loginService = (user: Omit<IUser, "email">) => {
    return API.post("/auth/login", user, {
        withCredentials: true //? it is important to set in dev environment
    });
}
export const logoutService = () => {
    return API.get("/auth/logout");
}
