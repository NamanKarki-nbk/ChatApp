import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  profilePic: string;
  isOnline: boolean;
}
const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isOnline: { type: Boolean, default: false },
  },

  { timestamps: true }
);

const User =mongoose.model<IUser>("User", UserSchema);
export default User;
