import { Daily } from "../models/dailies.js";
import {
  addDailyValidator,
  updateDailyValidator,
} from "../validators/dailies.validate.js";

export const addDaily = async (req, res, next) => {
  try {
    const { error, value } = addDailyValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const daily = new Daily({
      ...value,
      user: req.auth.id,
    });
    await daily.save();
    res.status(200).json("daily added successfully!");
  } catch (error) {
    res.status(422).json({ message: "Failed to add daily", error });
  }
};

export const getDailyById = async (req, res, next) => {
  try {
    const daily = await Daily.findById(req.params.id);
    if (!daily) {
      return res.status(404).json({ message: "daily not found" });
    }
    res.status(200).json(daily);
  } catch (error) {
    res.status(422).json({ message: "Failed to fetch daily", error });
  }
};

export const getAllDailies = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 50, skip = 0 } = req.query;

    const dailies = await Daily.find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    res.status(200).json(dailies);
  } catch (error) {
    res.status(422).json({ message: "Failed to fetch dailies", error });
  }
};

export const updateDaily = async (req, res, next) => {
  try {
    const { error, value } = updateDailyValidator.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details });
    }
    const updatedDaily = await Daily.findByIdAndUpdate(
      { _id: req.params.id, user: req.auth.id },
      value,
      { new: true }
    );
    if (!updatedDaily) {
      return res.status(404).json({ message: "daily not found" });
    }
    res.status(200).json("daily updated!");
  } catch (error) {
    res.status(422).json({ message: "Failed to update daily", error });
  }
};

export const deleteDaily = async (req, res, next) => {
  try {
    const deleteDaily = await Daily.findById(req.params.id);
    if (!deleteDaily) {
      return res.status(404).json({ message: "daily not found" });
    }
    await Daily.findByIdAndDelete(req.params.id);
    res.status(200).json("daily deleted!");
  } catch (error) {
    res.status(422).json({ message: "Failed to delete daily", error });
  }
};
