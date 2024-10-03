import express from 'express'
import { loginUser, registerUser } from '../controllers/authController.js';
import  authenticateMiddleware from '../middleware/authMiddleware.js'
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/check-auth", authenticateMiddleware,(req,res)=>{
     const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
})

export default router;