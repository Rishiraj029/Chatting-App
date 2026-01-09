import express from 'express';
import { signup, login, logout } from "../controllers/auth.controller.js"
const router = express.Router();

router.get("", (req, res) => {
   res.send("<h1>Hello Welcome To My Website</h1>")
})

router.post("/signup",signup)

router.post("/login", login);

router.post("/logout", logout);

export default router;