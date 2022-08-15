const mongoose = require("mongoose");

const friendsSchema = {
    name: String
}

const addFriend = mongoose.model("addFriend", friendsSchema);

module.exports = addFriend;