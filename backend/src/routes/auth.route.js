import express from 'express';

const router = express.Router();

router.get("", (req, res) => {
   res.send("<h1>Hello Welcome To My Website</h1>")
})

router.get("/signup", (req, res) => {
   res.send("Signup endpoint");
})
router.get("/login", (req, res) => {
   res.send("Login endpoint");
})
router.get("/logout", (req, res) => {
   res.send("Logout endpoint");
})

export default router;