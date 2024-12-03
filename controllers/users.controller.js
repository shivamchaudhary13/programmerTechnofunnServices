import userService from "../services/users.service.js";

const Register = async (req, res) => {
  let randomSixDigit = getRandomSixDigit();
  const result = await userService.registerUser(req.body, randomSixDigit);
  res.send(result);
};

const verifyOTP = async (req, res) => {
  const result = await userService.verifyOTP(req.body);
  res.send(result);
};

const updateProfile = async(req,res) => {
    const result = await userService.updateProfile(req);
    res.send(result);
}

const getUsers = async(req,res) => {
    let result = await userService.getUsers();
    res.send(result);
}

const deleteUsers = async(req,res) => {
    let result = await userService.deleteUsers(req);
    res.send(result);
}

const getUsersById = async(req,res) => {
    let result = await userService.getUsersById(req);
    res.send(result)
}

const getUserData = async(req,res) => {

}

function getRandomSixDigit() {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

export default { Register, verifyOTP,updateProfile,getUsers,deleteUsers,getUsersById,getUserData };
