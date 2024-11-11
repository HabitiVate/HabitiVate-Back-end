import Joi from "joi";

export const addTodoValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  dueDate: Joi.date().required(),
  reminder: Joi.date().required(),
});

export const updateTodoValidator = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  category: Joi.string(),
  dueDate: Joi.date(),
  reminder: Joi.date(),
  completed: Joi.boolean(),
});