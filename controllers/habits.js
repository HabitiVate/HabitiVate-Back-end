import { HabitModel } from "../models/habits.js";
import { addHabitValidator, updateHabitValidator } from "../validators/habit.validate.js";

export const addHabit = async (req, res, next) => {
  try {
    // add habit validator
    const { error, value } = addHabitValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    //connect to database
    const habit = new HabitModel({
      ...value,
      user: req.auth.id,
    });
    //save new data
    await habit.save();
    res.status(200).json("habit added successfully!");
  } catch (error) {
    res.status(422).json({ message: "Failed to add habit", error });
  }
};

export const getHabitById = async (req, res, next) => {
  try {
    const habit = await HabitModel.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: "habit not found" });
    }
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch habit", error });
  }
};


export const getAllHabits = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;

    const habits = await HabitModel.find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
     res.status(200).json(habits);
  } catch (error) {
     res.status(500).json({ message: "Failed to fetch habits", error });
  }
};


export const updateHabit = async (req, res, next) => {
  try {
    const {error, value} = updateHabitValidator.validate(req.body);
     if (error) {
       return res.status(422).json({ error: error.details });
     }
      const updatedHabit = await HabitModel.findByIdAndUpdate(
        { _id: req.params.id, user: req.auth.id },
        value,
        { new: true }
      );
     if (!updatedHabit) {
       return res.status(404).json({ message: "Habit not found" });
     }
     res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(500).json({ message: "Failed to update habit", error });
  }
};

export const deleteHabit = async (req, res, next) => {
 try {
    const deleteHabit = await HabitModel.findById(req.params.id);
    if (!deleteHabit) {
      return res.status(404).json({ message: "habit not found" });
    }
     await HabitModel.findByIdAndDelete(req.params.id);
     res.status(200).json("habit deleted!");
 } catch (error) {
   res.status(500).json({ message: "Failed to delete habit", error });
 }
};
