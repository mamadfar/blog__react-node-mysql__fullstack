import API from "../config/API";

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
