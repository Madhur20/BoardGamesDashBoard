const mongoose = require("mongoose");

const gameSchema = {
    name: String,
    genre: String,
    players: String,
    rating: Number
}

const addGame = mongoose.model("addGame", gameSchema);

module.exports = addGame;