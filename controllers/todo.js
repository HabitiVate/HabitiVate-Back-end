import { todoModel } from "../models/todo.js";

export const addTodo = (req, res, next) =>{
    res.status(201).json("todo was added");
};


export const getTodoById = (req, res, next) =>{
    res.status(201).json("get one todo");
};


export const getAllTodos = (req, res, next) =>{
    res.status(201).json("get all todos");
};


export const updateTodo = (req, res, next) =>{
    res.status(201).json("todo updated!");
};


export const deleteTodo = (req, res, next) =>{
    res.status(201).json("todo deleted!");
};


