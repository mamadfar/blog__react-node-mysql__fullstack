import {IUser} from "./user.model";

export interface IPost {
    id: number;
    title: string;
    desc: string;
    img: string;
    date: string;
    cat: string;
}

export interface IPostWithUser extends IPost, Omit<IUser, "id" | "img"> {
    userImg: string
}
