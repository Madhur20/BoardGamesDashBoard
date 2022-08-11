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

//DELETE Game
router.route("/deleteGame/:id").delete((req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
    // gameids.map(()=>{
        addGame.deleteOne({name : id}, (req, res, err) => {
            if(!err){
                console.log("Game is deleted!!!");
            } else {
                console.log(err);
            }
        // })
    })

})

module.exports = router;