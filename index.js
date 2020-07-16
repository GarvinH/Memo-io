const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, "build");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicPath));
app.use(
  session({
    secret: process.env.COOKIE_ID,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const userSchema = new mongoose.Schema({
  notes: [{ text: String, color: String }],
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(encrypt, {
  encryptionKey: process.env.ENC_KEY,
  signingKey: process.env.SIGN_KEY,
  encryptedFields: ["notes"],
});
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/", function (req, res) {
  return res.sendFile(path.join(publicPath, "index.html"));
});

app.post("/register", function (req, res) {
  console.log(req.body)
  User.register({ username: req.body.email }, req.body.password, function (
    err,
    user
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log("test")
      const middleware = passport.authenticate("local", (req, res, function(){
        res.status(200).send("authenticated");
        console.log("success")
      }));
      middleware(req, res)
    }
  });
});

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.email,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log;
    }
  });
});

app.listen(port);
