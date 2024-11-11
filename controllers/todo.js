import { TodoModel } from "../models/todo.js";
import {
  addTodoValidator,
  updateTodoValidator,
} from "../validators/todo.validate.js";

export const addTodo = async (req, res, next) => {
  try {
    const { error, value } = addTodoValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const todo = new TodoModel({
      ...value,
      user: req.auth.id,
    });
    await todo.save();
    res.status(200).json("todo added successfully!");
  } catch (error) {
    res.status(422).json({ message: "Failed to add todo", error });
  }
};

export const getTodoByCategory = async (req, res, next) => {
  try {
    const todoByCategory = await TodoModel.findById(req.params.id);
    if (!todoByCategory) {
      return res.status(404).json({ message: "todo not found" });
    }
    res.status(200).json(todoByCategory);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todo", error });
  }
};

export const getAllTodos = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;

    const todos = await TodoModel.find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos", error });
  }
};

export const updateTodo = async (req, res, next) => {
  try {
    const { error, value } = updateTodoValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const updateTodo = await TodoModel.findByIdAndUpdate(
      { _id: req.params.id, user: req.auth.id },
      req.body,
      { new: true }
    );
    if (!updateTodo) return res.status(404).json({ message: "todo not found" });
    res.status(201).json("todo updated successfully!");
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo", error });
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const deleteTodo = await TodoModel.findById(req.params.id);
    if (!deleteTodo) {
      return res.status(404).json({ message: "todo not found" });
    }
    await HabitModel.findByIdAndDelete(req.params.id);
    res.status(201).json("todo deleted!");
  } catch (error) {
     res.status(500).json({ message: "Failed to delete todo", error });
  }
};


