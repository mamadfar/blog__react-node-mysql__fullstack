import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { db } from "../db";

export const getPosts = (req: Request, res: Response) => {
  const query = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(query, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req: Request, res: Response) => {
  const query =
    "SELECT p.id AS id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const deletePost = (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");
    const query = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";
    const postId = req.params.id;

    db.query(query, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");
      return res.status(204).json("Post has been deleted.");
    });
  });
};
export const updatePost = (req: Request, res: Response) => {
  res.json("from controller");
};
export const addPost = (req: Request, res: Response) => {
  res.json("from controller");
};
