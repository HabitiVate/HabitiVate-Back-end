import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, getTodoById, updateTodo,  } from "../controllers/todo.js";
import { isAuthentication } from "../middlewares/auth.js";

const todoRouter = Router();

todoRouter.post("/todos", isAuthentication, addTodo);

todoRouter.get("/todos/:id", getTodoById);

todoRouter.get("/todos", getAllTodos);

todoRouter.patch("/todos/:id", isAuthentication, updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter