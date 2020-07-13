import mongoose from "mongoose";

export const Lead = mongoose.model("Lead", {
  businessName: String,
});
