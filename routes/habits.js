import { Router } from "express";
import { addHabit,deleteHabit,getAllHabits,getHabitById, updateHabit } from "../controllers/habits.js";

const habitRouter = Router();

habitRouter.post("/habits", addHabit);

habitRouter.get("/habits/:id", getHabitById);

habitRouter.get("/habits", getAllHabits);

habitRouter.patch("/habits/:id", updateHabit);

habitRouter.delete("/habits/:id", deleteHabit);

export default habitRouter