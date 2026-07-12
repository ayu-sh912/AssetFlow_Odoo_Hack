import bcrypt from "bcrypt";
import { Schema, model, Document } from "mongoose";

import { UserRole, DEFAULT_ROLE } from "../constants/roles.js";
import { UserStatus } from "../constants/status.js";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;

  department?: Schema.Types.ObjectId;

  role: UserRole;

  status: UserStatus;

  refreshToken?: string;

  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      default: null,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: DEFAULT_ROLE,
    },

    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },

    refreshToken: {
      type: String,
      default: null,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.methods.comparePassword = async function (
  password: string
) {
  return bcrypt.compare(password, this.password);
};

export const User = model<IUser>(
  "User",
  userSchema
);