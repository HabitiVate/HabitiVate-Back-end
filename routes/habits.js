import { Router } from "express";
import { addHabit,deleteHabit,getAllHabits,getHabitByCategory,getHabitById, updateHabit } from "../controllers/habits.js";
import { isAuthentication } from "../middlewares/auth.js";

const habitRouter = Router();

habitRouter.post("/habits", isAuthentication, addHabit);

habitRouter.get("/habits/:id", isAuthentication, getHabitById);

habitRouter.get("/habits/category/:category",isAuthentication, getHabitByCategory);

habitRouter.get("/habits", isAuthentication, getAllHabits);

habitRouter.patch("/habits/:id", isAuthentication, updateHabit);

habitRouter.delete("/habits/:id",isAuthentication, deleteHabit);

export default habitRouter