import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please add an email"],
        unique:true,
        trim:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid email"],
    },
    username:{
        type:String,
        required:[true,"Please add a username"]
    },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minLength:[6,"password should contain minimum 6 letter"]
    }
},
{
    timestamps:true,
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(this.password,salt);
    this.password = hashpass;
})

export const User = mongoose.model("User",userSchema);
