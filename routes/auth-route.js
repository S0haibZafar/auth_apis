const router = require("express").Router();
const User = require("../models/user");

router.post("/register", (req, res)=>{
    // res.json("Register works");
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    }); 
});

router.post("/login", (req, res)=>{
    res.json("Login works");
});


module.exports = router 