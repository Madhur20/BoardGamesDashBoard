const express = require('express')
const router = express.Router();

//import controllers
const {getTest} = require("../controllers/testapi");

//import middlewares

//set api routes
router.get("/api", getTest);

module.exports = router;