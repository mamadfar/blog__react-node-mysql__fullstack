import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/posts";
import authRoute from "./routes/auth";
import usersRoute from "./routes/users";

const app = express();

dotenv.config(); //? for using .env

const PORT = process.env.PORT || 8800;

app.use(express.json()); //? for sending json
app.use(cookieParser()); //? for pars cookie and send with req
app.use(morgan("dev")); //? loger
app.use(
  cors({
    //? permission for req
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Rules of our API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
//   res.header("Access-Control-Allow-Credentials", "true")
//   res.header("Access-Control-Allow-Methods", "POST")

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

//? Health check
app.get("/ping", (req, res, next) => res.status(200).json({ message: "pong" }));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
