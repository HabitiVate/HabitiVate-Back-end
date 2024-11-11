import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, getTodoByCategory, updateTodo,  } from "../controllers/todo.js";
import { isAuthentication } from "../middlewares/auth.js";

const todoRouter = Router();

todoRouter.post("/todos", isAuthentication, addTodo);

todoRouter.get("/todos/category/:category", getTodoByCategory);

todoRouter.get("/todos", getAllTodos);

todoRouter.patch("/todos/:id", isAuthentication, updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter