import Joi from "joi";

export const addDailyValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  frequency: Joi.string().valid("daily", "weekly", "monthly").default("daily"),
  dateCreated: Joi.date(),
  difficulty: Joi.string()
    .valid("easy", "medium", "hard", "trivial")
    .default("medium"),
  tags: Joi.string(),
  streak: Joi.number(),
  status: Joi.string().valid("all", "due", "not due").default("all"),
});

export const updateDailyValidator = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  frequency: Joi.string().valid("daily", "weekly", "monthly"),
  difficulty: Joi.string().valid("easy", "medium", "hard", "trivial") .default("medium"),
  tags: Joi.string(),
  streak: Joi.number(),
  status: Joi.string().valid("all", "due", "not due").default("all"),
  completed: Joi.boolean(),
});
