import Joi from "joi";

export const registerUserValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
  avatar: Joi.string().optional().allow(null),
});

export const loginUserValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

export const updateUserProfileValidator = Joi.object({
  userName: Joi.string(),
  avatar: Joi.string()
});