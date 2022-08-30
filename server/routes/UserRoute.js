const router  = require("express").Router();
const {user, validate} = require("../models/UserModel");
const bcrypt = require("bcrypt");

router.post("/signup", async (res,req) => {
    try {
        const{error} = validate(req.body);
        if(error){
            return res.status(400).send({messgae:error.details[0].message})
        }
        const User = await user.findOne({userName: res.body.userName});

        if(User){
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