//import modules
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require("dotenv").config()

//app
const app = express()

//db
//username: gamesdashboard    password: GamesDashBoard2022
//uri: mongodb+srv://gamesdashboard:GamesDashBoard2022@cluster0.xxrzcsn.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB Connected"))
.catch((err)=>console.log("DB connection error", err));


//middleware
app.use(morgan("dev"));
app.use(helmet())
app.use(cors({origin: true, credentials: true}));

//route
const testRoutes = require('./routes/testapi');
app.use("/", testRoutes);

//port
const port = process.env.PORT || 8080

//listener
app.listen(8080, () => { console.log("Server started on port 8080")});


module.exports = app;