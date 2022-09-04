const mongoose = require("mongoose");

const friendsSchema = {
    userName: String,
    friends: [String],
}

const addFriend = mongoose.model("addFriend", friendsSchema);

module.exports = addFriend;