import { toJSON } from "@reis/mongoose-to-json";
import { Schema, Types, model } from "mongoose";

const habitSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    createdby: {type: Types.ObjectId, ref:"user", required: true}
  },
  {
    timestamps: true,
  }
);

habitSchema.plugin(toJSON)

export const HabitModel = model ('habits', habitSchema)