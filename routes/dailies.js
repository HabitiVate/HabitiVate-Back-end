import { Router } from "express";
import { addDaily, deleteDaily, getAllDailies, getDailyById, updateDaily } from "../controllers/dailies.js";
import { isAuthentication } from "../middlewares/auth.js";

const dailyRouter = Router();

dailyRouter.post("/daily", isAuthentication, addDaily);

dailyRouter.get("/daily/:id", isAuthentication, getDailyById);

dailyRouter.get("/daily", isAuthentication, getAllDailies);

dailyRouter.patch("/daily/:id",isAuthentication, updateDaily);

dailyRouter.delete("/daily/:id", isAuthentication, deleteDaily);

export default dailyRouter
