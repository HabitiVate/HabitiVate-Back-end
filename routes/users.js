import { Router } from "express";
import { getUserProfile, loginUser, logoutUser, registerUser, updateUserProfile } from "../controllers/users.js";
import { isAuthentication } from "../middlewares/auth.js";


const userRoute = Router();

userRoute.post('/user/register',registerUser)

userRoute.post('/user/login', loginUser)

userRoute.get('/user/profile', isAuthentication, getUserProfile)

userRoute.patch('/user/me', isAuthentication, updateUserProfile)

userRoute.post('/user/logout', logoutUser)

export default userRoute