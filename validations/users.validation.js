import joi from "joi";

const register = {
    body: joi.object().keys({
        firstName: joi.string(),
        lastName: joi.string(),
        email: joi.string(),
        dob: joi.date(),
        mobileNumber: joi.number()
    })
}

export default {register};