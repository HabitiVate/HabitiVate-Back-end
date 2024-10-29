import Joi from "joi";

export const registerUserValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().unique().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
});

export const loginUserValidator = Joi.object({
  email: Joi.string().unique().required(),
  password: Joi.string().required()
});

export const getUserProfileValidator = Joi.object({
  userName: Joi.string().required()
});