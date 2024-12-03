import authServices from '../services/auth.service.js';

const login = async(req,res) => {
    const result = await authServices.login(req.body);
    res.send(result);
}

const changePassword = async(req,res) => {
    const result = await authServices.changePassword(req);
    res.send(result);
}

export default {login,changePassword}