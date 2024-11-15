import { Router } from "express";
import { addHabit,deleteHabit,getAllHabits,getHabitById, updateHabit } from "../controllers/habits.js";
import { isAuthentication } from "../middlewares/auth.js";
import { upload } from "../middlewares/upload.js";


const habitRouter = Router();

habitRouter.post("/habits", isAuthentication, addHabit);

habitRouter.get("/habits/:id", isAuthentication, getHabitById);

habitRouter.get("/habits", isAuthentication, getAllHabits);

habitRouter.patch("/habits/:id", isAuthentication, upload.none() , updateHabit);

habitRouter.delete("/habits/:id",isAuthentication, deleteHabit);

export default habitRouter