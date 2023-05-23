const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require("../middleware/check-auth");


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
    User.find({ email: req.body.email }).exec().then(result => {
        if (result.length < 1) {
            return res.json({ success: false, message: "User not found!" });
        }
        const user = result[0];
        bcrypt.compare(req.body.password, user.password, (err, ret) => {
            if (ret) {

                const payload = {
                    userId : user._id
                }
                const token = jwt.sign(payload, "webBatch");

                return res.json({ success: true, token: token, message: "Login Successfull!" });

            } else {
                return res.json({ success: false, message: "Password does not match!" });
            }
        })


    }).catch(err => {
        res.json({ success: false, message: "Authentication Failed!" });
    })
});


router.get("/profile", (req, res) => {
    const userId = '646a51305be450e5b0d71838';

    User.findById(userId).exec().then(result=>{
        if (result){
            return res.json({ success: true, data: result });
        }
    }).catch(err=>{
        
        return res.json({ success: false, message: "Server Error!" });
    })

});


module.exports = router 