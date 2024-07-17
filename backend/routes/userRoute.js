import express from "express";
const router = express.Router();
import { loginCheck, loginUser, logout, registerUser } from "../controllers/userController.js";

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logincheck',loginCheck);
router.get('/logout',logout);

export default router;