import express from "express";
const router = express.Router();

import { getuser, loginCheck, loginUser, logout, registerUser, updatePassword, updateUser } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logincheck',loginCheck);
router.get('/logout',logout);
router.get('/getuser', protect ,getuser);
router.put('/update', protect ,updateUser);
router.put('/resetpassword', protect ,updatePassword);

export default router;