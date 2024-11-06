import { Router } from "express";
import { addHabit,deleteHabit,getAllHabits,getHabitById, updateHabit } from "../controllers/habits.js";
import { isAuthentication } from "../middlewares/auth.js";

const habitRouter = Router();

habitRouter.post("/habits", isAuthentication, addHabit);

habitRouter.get("/habits/:id", getHabitById);

habitRouter.get("/habits", getAllHabits);

habitRouter.patch("/habits/:id", isAuthentication, updateHabit);

habitRouter.delete("/habits/:id", deleteHabit);

export default habitRouter