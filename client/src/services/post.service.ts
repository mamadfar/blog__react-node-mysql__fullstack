import API from "../config/API";
import {IPost} from "../model/post.model";

export const getPostsService = (query?: string) => {
    return API.get(`/posts${query}`);
}
export const getPostService = (id: string | undefined) => {
    return API.get(`/posts/${id}`);
}
export const deletePostService = (id: string | undefined) => {
    return API.delete(`/posts/${id}`, {
        withCredentials: true
    });
}

export const uploadPostImgService = (file: FormData) => {
    return API.post(`/upload`, file, {
        withCredentials: true
    });
}

export const createPostService = (post: FormData) => {
    return API.post(`/posts`, post, {
        withCredentials: true
    });
}
export const updatePostService = (id: string | undefined, newPost: Omit<IPost, "id" | "date"> | FormData) => {
    return API.put(`/posts/${id}`, newPost, {
        withCredentials: true
    });
}
