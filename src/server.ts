import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import {authRouter} from "./routes/auth_routes";
dotenv.config();
const app = express();
app.use(cookieParser());

const PORT: number = Number(process.env.PORT) || 3000;
const MONGO_URI: string = String(process.env.MONGO_URI);

app.use(express.json());
console.log(`Loaded PORT: ${process.env.PORT}`);
console.log(MONGO_URI);

app.use("/api", authRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database not connected", err));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello From ChatApp");
});

app.listen(PORT, () => {
  console.log(`Server sunning on port ${PORT}`);
});
