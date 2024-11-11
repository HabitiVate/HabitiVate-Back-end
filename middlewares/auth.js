import { expressjwt } from "express-jwt";
import { userModel } from "../models/users.js";

export const isAuthentication = expressjwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ["HS256"],
});

export const hasPermission = (action) => {
  return async (req, res, next) =>{

  }
}