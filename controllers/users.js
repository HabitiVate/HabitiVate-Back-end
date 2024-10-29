import { userModel } from "../models/users.js";
import { loginUserValidator, registerUserValidator, updateUserProfileValidator } from "../validators/users.validate.js";


export const registerUser = (req, res, next) => {
   try {
    //validate user input 
    const {error, value} = registerUserValidator.validate (req.body);
    if (error) {
        return res.status(422).json(error);
    }
    //check if user already exist
    //hash password
    //send user confirmation mail
    //respond to request
     res.status(201).json('User registered!')
   } catch (error) {
        next(error)
   }
};

export const loginUser = (req, res, next) => {
   try {
    // validate user input
    const {error, value} = loginUserValidator.validate (req.body);
    if (error) {
        return res.status(422).json(error)
    }
     res.status(200).json('User logged in!')
   } catch (error) {
        next(error)
   }
};

export const getUserProfile = (req, res, next) => {
    try {
        res.status(200).json('User Profile')
    } catch (error) {
        next(error)
    }
};

export const updateUserProfile = (req, res, next) => {
    try {
        const { error, value } = updateUserProfileValidator.validate({
          ...req.body,
          avatar: req.file?.filename,
        });
        if (error) {
            return res.status(422).json(error)
        }
        res.status(200).json('User updated profile!')
    } catch (error) {
        next (error)
    }
}; 

export const logoutuser = (req, res, next) => {
    res.status(200).json('user logged out!')
}

