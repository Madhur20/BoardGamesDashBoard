// Getting a List of games according to User Params
const express = require("express");
const router = express.Router();
const addFriend = require("../models/AddFriendModel");
const addGame = require("../models/AddGameModel");
const user = require("../models/UserModel");


router.route("/findgames").get(async (req, res) => {
    console.log(req.query);
    const friends = req.query.friends.split(",");
    const player = req.query.players;
    const genre = req.query.genre;
    console.log(friends);
    const friend_games = await addGame.find({
        userName: friends, 
        games:{
            genre: genre, 
            players: {
                $lte: player
            }
        }
    });
    console.log(friend_games);
    
    // for (let i = 0; i < friends.length; i++) {
    //     if(!user.findOne({userName: friends[i]})){
    //         return res.status(404).send({message:"Friend Not Found!"});
    //     }
    // }
})

module.exports = router;