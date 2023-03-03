import { Request, Response } from "express";
import { db } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "./../vendor/user.vendor";

//! Register
export const register = (req: Request<{}, {}, IUser>, res: Response) => {
  //? Check existing user
  const query = "SELECT * FROM users WHERE email = ? OR username = ?";
  const values = [req.body.email, req.body.username];

  db.query(query, [...values], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!"); // 409 => data already exists.

    //? Hash the pass and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const query =
      "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    db.query(query, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(201).json("User has been created.");
    });
  });
};

//! Login
export const login = (
  req: Request<{}, {}, Omit<IUser, "email">>,
  res: Response
) => {
  //? Check user exists
  const query = "SELECT * FROM users WHERE username = ?";
  const values = [req.body.username];

  db.query(query, [...values], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data.length) return res.status(404).json("User not found!");

    // console.log(data); //! [RowDataPacket: {...}]

    //? Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect) {
        return res.status(400).json("Wrong username or password!");
    };

    //? jwt token
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const {password, ...other} = data[0];

    //? cookie
    res.cookie("access_token", token, {
      httpOnly: true,
      path: "/login"
    }).status(200).json(other);
  });
};

//! Logout
export const logout = (req: Request, res: Response) => {};
