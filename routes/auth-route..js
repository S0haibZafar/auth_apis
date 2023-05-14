const router = require("express").Router();

router.post("/register", (req, res)=>{
    res.json("Register works");
});

router.post("/login", (req, res)=>{
    res.json("Login works");
});


module.exports = router; 