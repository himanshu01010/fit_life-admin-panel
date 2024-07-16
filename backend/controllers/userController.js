import asyncHandler from "express-async-handler";
import {User} from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn:"1d"});
};

const registerUser = asyncHandler(async (req,res)=>{
    const { email, username, password } = req.body;

    if(!email || !username || !password){
        res.status(400);
        throw new Error("Please fill all the fields")
    }

    if(password.length<6){
        res.status(400);
        throw new Error("password must be contain at least 6 letter")
    }

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error("User already exist");
    }

    const user = await User.create({
        email,
        username,
        password
    });

    const token = generateToken(user._id);

    res.cookie("token",token,{
        httpOnly:true,
        expires: new Date(Date.now() + 1000 + 86400),
        secure:false,
        sameSite:"lax",
        path:"/"
    });

    if(user){
        const {username , email} = user;
        res.status(201).json({
            username,
            email,
        });
    }
    else{
        res.status(400)
        throw new Error("Invalid User Data")
    }


});

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password}= req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("Please provide email and password");
    }
    const user = await User.findOne({email});
    if(!user){
        res.status(400);
        throw new Error("user not found");
    }

    const passwordMatch = await bcrypt.compare(password,user.password);
    const token = generateToken(user._id);

    res.cookie("token",token,{
        httpOnly:true,
        expires:new Date(Date.now() + 1000 + 86400),
        secure:false,
        sameSite:"lax",
        path:"/"
    });

    if(user && passwordMatch){
        const {username , email} = user;
        res.status(201).json({username,email})
    }else{
        res.status(400);
        throw new Error("Invalid email and password");
    }
})

export {registerUser,loginUser};