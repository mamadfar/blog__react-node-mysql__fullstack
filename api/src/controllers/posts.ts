import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { db } from "../db";

export const getPosts = (req: Request, res: Response) => {
  const query = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  const rootUrl = `${req.protocol}://${req.headers.host}`;

  db.query(query, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    const newData = [...data].map((item) => {
      if (!item.img.includes("http")) {
        item.img = `${rootUrl}${item.img}`;
      }
      return item;
    });
    return res.status(200).json(newData);
  });
};

export const getPost = (req: Request, res: Response) => {
  const query =
    "SELECT p.id AS id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";
  const rootUrl = `${req.protocol}://${req.headers.host}`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    const post = {...data[0], img: !data[0].img.includes("http") ? `${rootUrl}${data[0].img}` : data[0].img};
    return res.status(200).json(post);
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
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const query =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=? AND `uid`=?";
    const values = [
      req.body.title,
      req.body.desc,
      req.file ? `/uploads/${req.file.filename}` : req.body.img,
      req.body.cat,
    ];

    db.query(query, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("Post has been updated.");
    });
  });
};
export const addPost = (req: Request, res: Response) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  verify(token, "jwtkey", (err: any, userInfo: any) => {
    if (err) return res.status(403).json("Token is not valid!");

    const query =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      `/uploads/${req.file?.filename}`,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];
    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(201).json("Post has been created.");
    });
  });
};
