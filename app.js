const express = require("express")
const bodyParser = require('body-parser');


const app = express();

const port = process.env.port || 8080;

const authRoute = require("./routes/auth-route");
// var routes = require("./routes/index.js");
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/auth-app')
    .then(() => {
        console.log("DB is connected...");
    }).catch((err) => {
        console.log("DB is not connected!!", err);
    });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/auth', authRoute);

app.get("/", (req, res) => {
    res.send("Wellcome To Server::::+😊");
});

app.listen(port, () => {
    console.log("Node Server is connected: ", port);
});