import otp from "../models/otp.model.js";
import Users from "../models/users.model.js";
import getRandomSixDigit from "../utils/randomNumber.js";
import emailsService from "./emails.service.js";

const login = async (requestBody) => {
  const result = {};
  const userData = await Users.findOne({
    email: requestBody.email,
    password: requestBody.password,
    // active: true
  });

  if (!userData) {
    result.statusCode = 404;
    result.login = false;
    result.message = "Invalid Email or Password";
  } else if (userData.emailVerified === false) {
    result.statusCode = 404;
    result.login = false;
    result.message = "please verify your Email!!";
    let randomSixDigit = getRandomSixDigit();
    await otp.deleteOne({ email: requestBody.email });
    await otp.create({ email: requestBody.email, otp: randomSixDigit });
    await emailsService.emailVerification(requestBody, randomSixDigit);
  } else if (userData.active === false) {
    result.statusCode = 404;
    result.login = false;
    result.message = "Your Account is deactivated, please connect to Admin";
  } else {
    result.statusCode = 200;
    result.login = true;
    result.user = userData;
  }
  return result;
};

const changePassword = async (requestBody) => {
  let result = {};
  const userData = await Users.findOne({ _id: requestBody.query.userId });
  if (requestBody.body.oldPass === userData.password) {
    await Users.updateOne(
      { _id: requestBody.query.userId },
      { $set: { password: requestBody.body.newPass } }
    );
    result = { statusCode: 200, message: "Password changed successfully!!" };
  } else {
    result = { statusCode: 404, message: "Old password is incorrect!!" };
  }
  return result;
};

export default { login, changePassword };
