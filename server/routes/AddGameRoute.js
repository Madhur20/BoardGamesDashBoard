const express = require("express");
const router = express.Router();
const addGame = require("../models/AddGameModel");

//POST the new Game
router.route("/addGame").post(async (req, res) =>{
    // console.log(req);
    const user = req.body.userName;
    const game = req.body.gameName;
    console.log(user);
    const check = await addGame.find({userName: user});
    if(check.length > 0){
        await addGame.findOneAndUpdate({
            userName: user,
        },
        {
            $addToSet: {
                games: {
                    name: game.name,
                    genre: game.genre,
                    players: game.players,
                    rating: game.rating,
                }
            },
        })
    }
    else{
        const newGame = new addGame({
            userName: user,
            games: {
                name: game.name,
                genre: game.genre,
                players: game.players,
                rating: game.rating,
            },
        })
        newGame.save();
    }
})

// GET the new Game
router.route("/putGame:user").get(async (req, res) => {
    const username = req.params.user;
    const gameList = await addGame.findOne({userName: username });
    if(gameList){
        await addGame.findOne({userName: username})
        .then(res.json(gameList.games))
        .catch((err) => {
            console.log(err);
        });
    }
    else{
        res.json([]);
    }
})

//DELETE Game
router.route("/deleteGame/:nid").delete(async (req, res) => {
    const id = req.params.nid;
    // console.log(req.params.nid);
    const user = req.params.nid.split("+")[0];
    const gameName = req.params.nid.split("+")[1];
    // console.log(user);
    // const mark = await addGame.findOne({userName: user});
    // console.log(mark);
    await addGame.updateOne(
        {
            userName: user
        },
        {
            $pull: {games: {name: gameName}}
        },
        {multi:true}
    );

})

module.exports = router;