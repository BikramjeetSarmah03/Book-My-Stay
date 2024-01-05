import mongoose from "mongoose";
import crypto from "crypto";

export type UserType = {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  salt?: string;
  checkPassword: (password: string) => Promise<boolean>;
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  salt: {
    type: String,
    select: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.salt = crypto.randomBytes(16).toString("hex");

    this.password = crypto
      .pbkdf2Sync(this.password, this.salt, 1000, 64, "sha512")
      .toString("hex");
  }
  next();
});

userSchema.methods.checkPassword = async function (enteredPassword: string) {
  const hash = crypto
    .pbkdf2Sync(enteredPassword, this.salt, 1000, 64, "sha512")
    .toString("hex");

  return this.password === hash;
};

const User = mongoose.model<UserType>("users", userSchema);
export default User;
