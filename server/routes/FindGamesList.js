// Getting a List of games according to User Params
const express = require("express");
const router = express.Router();
const addFriend = require("../models/AddFriendModel");
const addGame = require("../models/AddGameModel");
const user = require("../models/UserModel");


router.route("/findgames").get(async (req, res) => {
    // console.log(req.query);
    const friends = req.query.friends.split(",");
    const player = req.query.players;
    const genr = req.query.genre;
    // console.log(friends);
    const friend_games = await addGame.find({
        userName: friends, 
    });
    // console.log(friend_games);
    const response = [];
    for (let i = 0; i < friend_games.length; i++) {
        const f_games = friend_games[i];
        for (let j = 0; j < f_games.games.length; j++) {
            if(f_games.games[j].genre === genr && f_games.games[j].players >= player){
                response.push(f_games.games[j]);
            }
        }
    }
    // console.log(response);
    res.json(response);
})

module.exports = router;