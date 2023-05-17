const express = require("express")


const app = express();

const port = process.env.port || 8080;

const authRoute = require("./routes/auth-route");
// var routes = require("./routes/index.js");
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

app.use('/auth', authRoute);

app.get("/", (req, res)=>{
    res.send("Wellcome To Server::::+😊");
});

app.listen(port, ()=>{
        console.log("Node Server is connected: ", port);
});