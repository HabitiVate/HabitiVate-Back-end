import { Schema, model } from "mongoose";




const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName:{ type: String,required: true},
  email: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  confirmPassword: { type: String, required: true}

}, {timestamps: true});

export const userModel = model ('user', userSchema)