import { Router } from "express";
import { getUserProfile, loginUser, logoutUser, registerUser, updateUserProfile } from "../controllers/users.js";
import { isAuthentication } from "../middlewares/auth.js";
import { upload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post('/user/register',registerUser)

userRouter.post('/user/login', loginUser)

userRouter.get('/user/profile', isAuthentication, getUserProfile)

userRouter.patch('/user/me', isAuthentication, upload.single("avatar"), updateUserProfile)

userRouter.post('/user/logout', logoutUser)

export default userRouter