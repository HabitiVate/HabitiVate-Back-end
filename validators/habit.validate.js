import Joi from "joi";

export const addHabitValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  duration: Joi.string().required()

});

export const updateHabitValidator = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  duration: Joi.string()
});