const express = require("express");
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
router.route("/putFriend:user").get((req, res) => {
    addFriend.findOne({userName: user, })
    .then()
    .then(foundFriend => res.json(foundFriend))
})

//DELETE Friend
router.route("/deleteFriend/:id").delete((req, res) => {
    const user = req.params.id.userName;
    const friend = req.params.id.friend;

    console.log(req.params.id);
    addFriend.findOneAndDelete(
        {
            userName: user,
            friends: findOne({name: friend}),
        }, 
        // {
        //     friends: findOne({name: friend}, (req, res, err) => {
        //         if(!err){
        //             console.log("Friend is deleted!!!");
        //         } else {
        //             console.log(err);
        //         }
        //     })
        // }
    )
    //     addFriend.deleteOne({name : friend}, (req, res, err) => {
    //         if(!err){
    //             console.log("Friend is deleted!!!");
    //         } else {
    //             console.log(err);
    //         }
    // })

})

module.exports = router;