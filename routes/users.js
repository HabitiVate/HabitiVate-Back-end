import { Router } from "express";
import { getUserDaily, getUserHabits, getUserProfile, getUserTodos, loginUser, logoutUser, registerUser, updateUserProfile } from "../controllers/users.js";
import { isAuthentication } from "../middlewares/auth.js";
import { upload } from "../middlewares/upload.js";

const userRouter = Router();

userRouter.post('/user/register',registerUser)

userRouter.post('/user/login', loginUser)

userRouter.get('/users/me/habits', isAuthentication, getUserHabits);

userRouter.get('/users/me/todos', isAuthentication, getUserTodos);

userRouter.get('/users/me/dailies', isAuthentication, getUserDaily);

userRouter.get('/user/profile', isAuthentication, getUserProfile);

userRouter.patch('/user/me/:id', isAuthentication, upload.single("avatar"), updateUserProfile);

userRouter.post('/user/logout', logoutUser);

export default userRouter