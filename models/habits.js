import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

const habitSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

habitSchema.plugin(toJSON)

export const habitModel = model ('habits', habitSchema)