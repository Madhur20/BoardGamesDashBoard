const express = require("express");
const { findOneAndDelete } = require("../models/AddFriendModel");
const router = express.Router();
const addFriend = require("../models/AddFriendModel");

//POST the new Friend
router.route("/addFriend").post(async (req, res) =>{
    const user = req.body.userName;
    const nameF = req.body.friendName;
    const check = await addFriend.find({userName: user});
    console.log(typeof nameF);
    if(check.length > 0){
        await addFriend.findOneAndUpdate({
            userName: user,
        },
        {
            $addToSet: {
                friends: nameF,
            },
        })
    }
    else{
        const newF = new addFriend({
            userName: user,
            friends: [nameF],
        })
        newF.save();
    }
})

//GET the new Friend
router.route("/putFriend:user").get(async (req, res) => {
    const username = req.params.user;

    const friendList = await addFriend.findOne({userName: username });
    // console.log(friendList.friends);
    res.json(friendList.friends);
    // .then(foundFriend.friends => res.json(foundFriend.friends))
})

//DELETE Friend
router.route("/deleteFriend/:id").delete(async (req, res) => {
    // console.log(req.params);
    const user = req.params.id.userName;
    const friendN = req.params.id.friend;
    const mark = await addFriend.findOne({userName: user});
    console.log(mark);
})

module.exports = router;