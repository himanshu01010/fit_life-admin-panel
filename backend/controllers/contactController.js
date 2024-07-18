import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

const contact = asyncHandler(async (req,res)=>{
    const {name,phone,email,service,comment} = req.body
    if(!name||!phone||!email||!service||!comment){
        res.status(400);
        throw new Error("Please fill all the field");
    }

    const userExist = await Contact.findOne({email});

    if(userExist){
        res.status(400);
        throw new Error("user already exist");
    }

    const form = await Contact.create({
        name:name,
        phone:phone,
        email:email,
        service:service,
        comment:comment
    });
    res.status(201).json(form);
})

const getContact = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

const deleteContact = asyncHandler(async(req,res)=>{
    const {email} = req.body;

    if(!email){
        res.status(400)
        throw new Error("Please provide an email")
    }

    const contact = await Contact.findOneAndDelete({email});

    if(!contact){
        res.status(400)
        throw new Error("Contact is not found");
    }
    res.status(200).json({message:"Contact deleted successfully"})

})

export {contact,getContact,deleteContact};