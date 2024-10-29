import { userModel } from "../models/users.js";

export const registerUser = (req, res, next) => {
    res.status(201).json('User registered!')
};

export const loginUser = (req, res, next) => {
    res.status(200).json('User logged in!')
};

export const getUserProfile = (req, res, next) => {
    res.status(200).json('User Profile')
};

export const updateUserProfile = (req, res, next) => {
    res.status(200).json('User updated profile!')
}; 

export const logoutuser = (req, res, next) => {
    res.status(200).json('user logged out!')
}

