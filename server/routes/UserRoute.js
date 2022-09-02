const router  = require("express").Router();
const {user, validate} = require("../models/UserModel");
const bcrypt = require("bcrypt");

router.route("/signup").post(async (req, res) =>{
    try {
        const {error} = user.validate(req.body);
        if (error){
            return res.status(400).send({messgae:error.details[0].message})
        }
        const User = await user.find({userName: req.body.userName});
        if (User.length>0){
            return res.status(409).send({message: "User Name already taken!"})
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new user({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "Account created successfully"});

    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
});

module.exports = router;