import express from "express";
const router = express.Router();
import { contact, deleteContact, getContact } from "../controllers/contactController.js";


router.post('/contact',contact);
router.get('/getcontact',getContact)
router.delete('/deletecontact',deleteContact);

export default router;