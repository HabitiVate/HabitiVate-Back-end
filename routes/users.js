import { Router } from "express";
import { getUserProfile, loginUser, logoutuser, registerUser, updateUserProfile } from "../controllers/users.js";


const userRoute = Router();

userRoute.post('/user/register',registerUser)

userRoute.post('/user/login', loginUser)

userRoute.get('/user/profile', getUserProfile)

userRoute.post('/user/me', updateUserProfile)

userRoute.post('/user/logout', logoutuser)

export default userRoute