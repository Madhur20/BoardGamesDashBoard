const express = require('express')
const app = express()

//route
app.get("/api", (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(["Hello ", "from ", "backend!"])
})

app.listen(8080, () => { console.log("Server started on port 8080")})

module.exports = app;