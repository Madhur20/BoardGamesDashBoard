const express = require("express");
const router = express.Router();
const addGame = require("../models/AddGameModel");

//POST the new Game
router.route("/addGame").post((req, res) =>{
    //console.log(req);
    const name = req.body.name;
    const genre = req.body.genre;
    const players = req.body.players;
    const rating = req.body.rating;
    const newGame = new addGame({
        name,
        genre,
        players,
        rating,
    });

    newGame.save();
})

//GET the new Game
router.route("/putGame").get((req, res) => {
    addGame.find()
    .then(foundGame => res.json(foundGame))
})

module.exports = router;