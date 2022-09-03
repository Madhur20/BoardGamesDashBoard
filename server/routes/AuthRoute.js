const router = require("express").Router();
const{user} = require("../models/UserModel");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const schema = Joi.object({
    userName: Joi.string().required().label("User Name"),
    password: Joi.string().required().label("Password"),
});

router.route("/login").post(async (req, res) =>{
    try {
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const User = await user.findOne({userName: req.body.userName});

        if(!User){
            return res.status(401).send({message: "Invalid User Name or Password"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password, User.password
        );

        if(!validPassword){
            return res.status(401).send({message: "Invalid User Name or Password"})
        }

        const token = User.generateAuthToken();
        res.status(200).send({data: token, message: "Logged in successfully"})

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
})

module.exports = router;