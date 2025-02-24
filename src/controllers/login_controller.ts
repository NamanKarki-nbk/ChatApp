import { Request,Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {authMiddleware, AuthenticatedRequest} from "../middlewares/auth_middleware";
import User from '../models/User';

export const SignIn= async(req:Request, res:Response): Promise<void>=>{
    try{
        const{name,email,password}=req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(400).json({message: "User already exists"});
            return;
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
         res.status(201).json({message:"Resgistration Successful"});
         return;

    }catch(err:any){
        res.status(500).json({error:err.message});
        return;
    }
};

export const LogIn= async(req:Request, res:Response): Promise<void>=>{

    try{
    const {email,password}=req.body;

    const user = await User.findOne({email})

    if (!user){
        res.status(400).json({message:"User not found!!"});
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
        res.status(400).json({message:"Password wrong"});
    }

    const token = jwt.sign(
        {id:user._id.toString()}, process.env.JWT_SECRET as string,
        {expiresIn: "1h"}
    );


    res.cookie("token", token,{
        httpOnly: true,
        secure: false, //process.env.NODE_ENV==="production",
        sameSite: "strict",
        maxAge: 7*24*60*60*1000,
    });

    res.json({message:"Login Successful", user});
    return;
    }catch(err:any){
        res.status(500).json({error: err.message});
    }

};