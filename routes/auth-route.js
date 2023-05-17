const router = require("express").Router();
const User = require("../models/user");

router.post("/register", (req, res)=>{
    // res.json("Register works");
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    }); 

    user.save().
    then((__)=>{
        res.json({success:true,message: "Account has been created"});
    }).catch((err)=>{
        res.json({success:false,message: "Authentication failed"});
    });

});

router.post("/login", (req, res)=>{
    res.json("Login works");
});


module.exports = router 