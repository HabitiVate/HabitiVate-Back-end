import { Schema, model, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const dailySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    frequency: {
      type: String,
      enum: ["daily", "weekly", "monthly"],
      default: "daily",
    },
    completed: { type: Boolean, default: false },
    dateCreated: { type: Date, default: Date.now },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard", "trivial"],
      default: "medium",
    },
    tags: [{ type: String }],
    streak: { type: Number, default: 0 },
    status: {type: String, enum:["all", "due", "not due"], default: "all"},
    user: { type: Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
  }
);
dailySchema.plugin(toJSON);

export const Daily = model("daily", dailySchema);
