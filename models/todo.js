import { Schema, model ,Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const todoSchema = new Schema(
  {
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
    completed: { type: Boolean, default: false },
    createdby: { type: Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
  }
);

todoSchema.plugin(toJSON);

export const TodoModel = model("todos", todoSchema);
