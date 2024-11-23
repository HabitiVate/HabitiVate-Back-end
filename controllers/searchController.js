import { Daily } from "../models/dailies.js";
import { HabitModel } from "../models/habits.js";
import { TodoModel } from "../models/todo.js";


export const searchEntities = async (req, res) => {
  const { keyword = "", type } = req.query; // Get search parameters
  const { id: userId } = req.auth; // Extract the authenticated user's ID from req.auth


  // Define the search query
  const searchQuery = {
    user: userId, // Ensure this matches your schema field name
    title: { $regex: keyword, $options: "i" }, // Case-insensitive search
  };
  

  try {
    const results = [];

    if (!type || type === "habit") {
      const habits = await HabitModel.find(searchQuery);
      results.push(
        ...habits.map((item) => ({ ...item.toObject(), type: "habit" }))
      );
    }

    if (!type || type === "todo") {
      const todos = await TodoModel.find(searchQuery);
      results.push(
        ...todos.map((item) => ({ ...item.toObject(), type: "todo" }))
      );
    }

    if (!type || type === "daily") {
      const dailies = await Daily.find(searchQuery);
      results.push(
        ...dailies.map((item) => ({ ...item.toObject(), type: "daily" }))
      );
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No results found" });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error("Search failed:", error);
    res.status(500).json({ error: "Search failed" });
  }
};
