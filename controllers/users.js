import { UserModel } from "../models/users.js";
import { loginUserValidator, registerUserValidator, updateUserProfileValidator } from "../validators/users.validate.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


export const registerUser = async (req, res, next) => {
   try {
    //validate user input 
    const {error, value} = registerUserValidator.validate (req.body);
    if (error) {
        return res.status(422).json(error);
    }
    //check if user already exist
    const user = await UserModel.findOne ({email:value.email});
    if (user) {
        return res.status(409).json("user already exist!")
    }
    //hash password
    const hashPassword = await bcryptjs.hashSync (value.password, 10)
    //save user into database
    await UserModel.create({...value, password: hashPassword});
    //send user confirmation mail???
    //respond to request
     res.status(201).json('User registered!')
   } catch (error) {
        next(error)
   }
};

export const loginUser = async (req, res, next) => {
   try {
    // validate user input
    const {error, value} = loginUserValidator.validate (req.body);
    if (error) {
        return res.status(422).json(error)
    }
    //find one with identifier
    const user = await UserModel.findOne ({
        email: value.email,
    });
    if(!user) {
        return res.status(404).json("user does not exist!");
    }
    //compare password
    const correctPassword = bcryptjs.compareSync(value.password, user.password)
    if (!correctPassword) {
        return res.status(401).json("invalid credentials")
    }
    //sign a token to user
    const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "24h",
    });
    //respond to request
     res.status(200).json({ message: "User logged in!", accessToken: token });
   } catch (error) {
        next(error)
   }
};

export const getUserProfile = async (req, res, next) => {
    try {
        //find authenticated user from database
        const user = await UserModel.findById(req.auth.id).select({
            password: false,
        });
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
};

export const updateUserProfile = async (req, res, next) => {
    try {
        const { error, value } = updateUserProfileValidator.validate({
          ...req.body,
          avatar: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error)
        }
        //update user
        const updatedUser = await UserModel.findByIdAndUpdate(req.auth.id, value, {
            new: true
        });
        if(!updatedUser){
            return res.status(404).json("user not found");
        }
        res.status(200).json('User updated profile!')
    } catch (error) {
        next (error)
    }
}; 

export const logoutUser = (req, res, next) => {
    res.status(200).json('user logged out!')
}

