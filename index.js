const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')
const session = require('express-session')

const port = process.env.PORT || 8080
const app = express();
const publicPath = path.join(__dirname, 'build')

app.use(bodyParser.json())
app.use(express.static(publicPath))
app.use(session({
    secret: process.env.COOKIE_ID,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    notes: [{text: String, color: String}]
})

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(encrypt, {encryptionKey: process.env.ENC_KEY, signingKey: process.env.SIGN_KEY, encryptedFields: ["notes"]})
const User = new mongoose.model("User", userSchema)

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  

const user = new User({email: "a@b.com", password: "test", notes: [{text: "test", color: "black"}, {text: "string", color:"red"}]})
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

app.get("/", function (req, res) {
    return res.sendFile(path.join(publicPath, "index.html"))
})

app.post("/register", function(req, res) {
    console.log(req.body)
})

app.listen(port)