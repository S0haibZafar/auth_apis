const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: false },
    password: { type: String, required: true },
    created_at: { type: Number, default: Date.now().valueOf() },
    updated_at: { type: Number, default: Date.now().valueOf() },


});

module.exports = mongoose.model("User", userSchema)