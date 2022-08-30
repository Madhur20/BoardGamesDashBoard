const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY)
    return token
};

const user = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = joi.object({
        userName: joi.string.required().label("User Name"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data)
};

module.exports = {user, validate};