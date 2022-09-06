const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, "jWTPrIvAtEkEy4@$25");     //process.env.JWTPRIVATEKEY = jWTPrIvAtEkEy4@$25
    return token;
};

const user = mongoose.model("user", userSchema);

module.exports = user;