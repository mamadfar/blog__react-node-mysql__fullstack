import express from "express";
import { addPost } from './../controllers/posts';

const router = express.Router();

router.get("/", addPost);

export default router;