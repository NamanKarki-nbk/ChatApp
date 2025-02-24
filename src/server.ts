import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();

const PORT: number = Number(process.env.PORT) || 3000;
const MONGO_URI: string = String(process.env.MONGO_URI);

app.use(express.json());
console.log(`Loaded PORT: ${process.env.PORT}`);

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
