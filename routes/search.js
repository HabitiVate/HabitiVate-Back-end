import { Router } from "express";
import { searchEntities } from "../controllers/search.js";
import { isAuthentication } from "../middlewares/auth.js";

const searchRouter = Router();

searchRouter.get("/search", isAuthentication, searchEntities);

export default searchRouter;
