import { habitModel } from "../models/habits.js";

export const addHabit = (req, res, next) =>{
    res.status(200).json("habit added!"); 
};


export const getHabitById = (req, res, next) =>{
    res.status(200).json("get one habit!");
};


export const getAllHabits= (req, res, next) =>{
    res.status(200).json("get all habit!");
};


export const updateHabit = (req, res, next) =>{
    res.status(200).json("habit updated!");
};


export const deleteHabit = (req, res, next) =>{
    res.status(200).json("habit deleted!");
}
