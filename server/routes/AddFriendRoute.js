const express = require("express");
const { findOneAndDelete } = require("../models/AddFriendModel");
const router = express.Router();
const addFriend = require("../models/AddFriendModel");

//POST the new Friend
router.route("/addFriend").post(async (req, res) =>{
    const user = req.body.userName;
    const nameF = req.body.friendName;
    const check = await addFriend.find({userName: user});
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
    if(friendList){
        await addFriend.findOne({userName: username })
        .then(res.json(friendList.friends))
        .catch((err) => {
            console.log(err);
        });
    }
    else{
        res.json([]);
    }
})

//DELETE Friend
router.route("/deleteFriend/:nid").delete(async (req, res) => {
    // console.log(req.params);
    const user = req.params.nid.split("+")[0];
    const friendN = req.params.nid.split("+")[1];
    const mark = await addFriend.findOne({userName: user});
    // console.log(mark);
    const list = mark.friends;
    let ind;
    for (let i = 0; i < list.length; i++) {
        if(list[i] === friendN){
            ind = i;
        }
    }
    await addFriend.updateOne(
        {
            userName: user
        },
        {
            $pull: {friends : {$in : friendN}}
        },
        {multi:true}
    );
})

module.exports = router;