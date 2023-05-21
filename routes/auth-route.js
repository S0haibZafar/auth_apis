const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');

router.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.json({ success: true, message: "Hash Error !!" })
        } else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });

            User.find({ email: req.body.email }).exec().then(result => {
                if (result.length < 1) {

                    user.save().
                        then((__) => {
                            res.json({ success: true, message: "Account has been created" });
                        }).catch((err) => {
                            res.json({ success: false, message: "Authentication failed!!" });
                        });

                } else {
                    res.json({ success: false, message: "Account is already exist!" });
                }
            }).catch(err => {
                console.log(" err:::-----", err);
            });
        }
    })



});

router.post("/login", (req, res) => {
    res.json("Login works");
});


module.exports = router 