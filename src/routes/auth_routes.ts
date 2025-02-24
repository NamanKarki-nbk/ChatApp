import express from 'express';
import {SignIn, LogIn} from "../controllers/login_controller";

export const authRouter = express.Router();
authRouter.post('/login', LogIn);
authRouter.post('/signup',SignIn);