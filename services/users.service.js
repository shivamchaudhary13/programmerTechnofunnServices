import otp from "../models/otp.model.js";
import Users from "../models/users.model.js";
import emailService from "../services/emails.service.js";

const registerUser = async (requestBody, randomSixDigit) => {
  let result = {};
  const existUser = await Users.findOne({ email: requestBody.email });

  if (existUser) {
    result.StatusCode = 409;
    result.message = "You are already registered!";
  } else {
    await Users.create(requestBody);
    let otpEmail = otp.findOne({email: requestBody.email});
    if(otpEmail) {
      await otp.updateOne({email: requestBody.email},{otp: randomSixDigit})
    }
    await otp.create({ email: requestBody.email, otp: randomSixDigit });
    await emailService.emailVerification(requestBody, randomSixDigit);
    result.StatusCode = 200;
    result.message = "You are registered Successfully!";
  }
  return result;
};

const verifyOTP = async (reqBody) => {
  let result = {};
  const otpData = await otp.findOne({ email: reqBody.email });
  if (otpData.otp === reqBody.otp) {
    await Users.updateOne(
      { email: reqBody.email },
      { $set: { emailVerified: true } }
    );
    result.StatusCode = 200;
    result.message = "Email is verified Successfully!!";
  } else {
    result.StatusCode = 400;
    result.message = "OTP is incorrect!!";
  }
  return result;
};

const updateProfile = async (requestBody) => {
  let result = {};
  let userData = await Users.findOne({ _id: requestBody.query.userId });
  await Users.updateOne(
    { _id: userData._id },
    {
      $set: {
        firstName: requestBody.body.firstname,
        lastName: requestBody.body.lastname,
        email: requestBody.body.email,
        dateOfBirth: requestBody.body.dob,
        mobileNumber: requestBody.body.mobileNumber,
      },
    }
  );
  result = {
    StatusCode: 200,
    message: "Profile updated successfully!!",
  };
  return result;
};

const getUsers = async () => {
  let result = await Users.find({ active: true });
  return result;
};

const deleteUsers = async (requestBody) => {
  let result = {};
  await Users.updateOne(
    { _id: requestBody.query.userId },
    { $set: { active: false } }
  );
  result = { StatusCode: 200, message: "User deleted successfully!!" };
  return result;
};

const getUsersById = async (reqBody) => {
  let result = await Users.findOne({ _id: reqBody.params.userId });
  return (result = { userData: result });
};

export default {
  registerUser,
  verifyOTP,
  updateProfile,
  getUsers,
  deleteUsers,
  getUsersById,
};
