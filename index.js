const express = require('express')
require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    notes: [String]
})

userSchema.plugin(encrypt, {secret: process.env.KEY, encryptedFields: ["notes"]})
const User = new mongoose.model("User", userSchema)

const user = new User({email: "a@b.com", password: "test", notes: ["test", "string"]})
// user.save(function(err) {
//     console.log(err)
// })
// User.findOne({email: "a@b.com"}, function(err, found) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(found.notes)
//     }
// })

const port = process.env.PORT || 8080
const app = express();
const publicPath = path.join(__dirname, 'build')
app.use(express.static(publicPath))

app.get("/", function (req, res) {
    return res.sendFile(path.join(publicPath, "index.html"))
})

app.listen(port)