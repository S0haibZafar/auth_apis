const express = require("express")


const app = express();

const port = process.env.port || 8080

app.get("/", (req, res)=>{
    res.send("Wellcome To Server::::+😊");
});

app.listen(port, ()=>{
        console.log("Node Server is connected: ", port);
});