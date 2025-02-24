import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profilePic: string;
  isOnline: boolean;
}
const User = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isOnline: { type: Boolean, default: false },
  },

  { timestamps: true }
);

export default mongoose.model<IUser>("User", User);
