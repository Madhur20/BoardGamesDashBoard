const express = require("express");
const router = express.Router();
const addFriend = require("../models/AddFriendModel");

//POST the new Friend
router.route("/addFriend").post((req, res) =>{
    // console.log(req);
    const name = req.body.name;
    const newFriend = new addFriend({
        name,
    });

    newFriend.save();
})

//GET the new Friend
router.route("/putFriend").get((req, res) => {
    addFriend.find()
    .then(foundFriend => res.json(foundFriend))
})

//DELETE Friend
router.route("/deleteFriend/:id").delete((req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
        addFriend.deleteOne({name : id}, (req, res, err) => {
            if(!err){
                console.log("Friend is deleted!!!");
            } else {
                console.log(err);
            }
    })

})

module.exports = router;