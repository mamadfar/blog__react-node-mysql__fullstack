import express, {Request, Response} from "express";

export const addPost = (req: Request, res: Response) => {
    res.json("from controller")
};