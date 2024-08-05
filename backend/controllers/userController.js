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
        secure:true,
        sameSite:"none",
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
        secure:true,
        sameSite:"none",
        path:"/"
    });

    if(user && passwordMatch){
        const {username , email} = user;
        res.status(201).json({username,email})
    }else{
        res.status(400);
        throw new Error("Invalid email and password");
    }
});

const loginCheck = asyncHandler(async (req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json(false);
    }

    try {
        const verify = jwt.verify(token,process.env.JWT_KEY);
        if(verify){
            return res.json(true);
        }
        
    } catch (error) {
        console.error("Jtw verification failed",error.message);
        
    }
    return res.json(false);

});

const logout =(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({ message: "Successfully Logged Out" });
}

const getuser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        const {email, username} = user;
        res.status(200).json({
            email,
            username
        })
    }
    else{
        res.status(400)
        throw new Error("User Not Found!");
        console.log("User not found!");
    }

})

const updateUser = asyncHandler(async (req, res) => {
    const id = req.user._id;
    const {email, username} = req.body;

    try {
        await User.findByIdAndUpdate(id, {email, username}, {new: true, runValidators: true});
        res.status(200).json({message: "User Updated Successfully"})
    } catch (error) {
        res.status(400)
        throw new Error("User Not Updated");
    }
})

const updatePassword = asyncHandler(async (req, res) => {
    const id = req.user._id;
    const {password} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password,salt);
        await User.findByIdAndUpdate(id, {password: hashpass}, {new: true, runValidators: true})
        res.status(201).json({message: "Updated Successfully"})
    } catch (error) {
        res.status(400)
        throw new Error("Unable to update")
    }
   
})

// const userData = asyncHandler(async(req,res)=>{
//     const {email,username,password} = req.body;
//     if(!email || !username || !password){
//         res.status(400)
//         throw new Error("data is not present");
//     }

// })

export {registerUser,loginUser,loginCheck,logout,getuser,updateUser,updatePassword};