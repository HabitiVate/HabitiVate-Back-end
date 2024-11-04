import { expressjwt } from "express-jwt";
import { userModel } from "../models/users.js";

export const isAuthentication = expressjwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ["HS256"],
});
