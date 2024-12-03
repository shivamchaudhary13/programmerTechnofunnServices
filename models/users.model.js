import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
  },
  resume: {
    type: String,
  },
  accountType: {
    type: String,
  },
  level: {
    type: String,
  },
  skills: {
    type: String,
    default: "NA",
  },
  currentLocation: {
    type: String,
    default: "NA",
  },
  preferredLocation: {
    type: String,
    default: "NA",
  },
  experience: {
    type: String,
    default: "NA",
  },
  status: {
    type: String,
    default: "new registered",
  },
  buttonStatus: {
    type: String,
    default: "invite",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Users = mongoose.model("users", userSchema);
export default Users;
