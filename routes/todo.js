import { Router } from "express";
import { addTodo, deleteTodo, getAllTodos, getTodoById, updateTodo,  } from "../controllers/todo.js";

const todoRouter = Router();

todoRouter.post("/todos", addTodo);

todoRouter.get("/todos/:id", getTodoById);

todoRouter.get("/todos", getAllTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter