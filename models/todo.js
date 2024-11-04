import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed"],
  },
  category: { type: String },
  dueDate: { type: Date },
  reminder: { type: Date },
}, {
    timestamps: true,
  }
);

todoSchema.plugin(toJSON);

export const todoModel = model("todos", todoSchema);
