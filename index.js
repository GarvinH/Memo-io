const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const aes256 = require("aes256");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const port = process.env.PORT || 8080;
const app = express();
const publicPath = path.join(__dirname, "build");

app.use(bodyParser.urlencoded({ extended: true }));
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
  email: String,
  password: String,
  notes: [{ text: String, color: String }],
});

userSchema.plugin(passportLocalMongoose);
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

function save_data(req, res) {
  if (req.isAuthenticated()) {
  } else {
  }
}
// const user = new User({
//   username: 'asdf@asdf.com',
//   password: 'test',
//   notes: [{text: 'lol', color: 'red'}, {text: 'test', color:"white"}]
// })

// user.save()

app.get("/", function (req, res) {
  console.log(req.user)
  return res.sendFile(path.join(publicPath, "index.html"));
});

app.use('/', express.static(publicPath));


app.get("/test", function (req, res) {
  if (req.isAuthenticated()) {
    console.log(req.user);
    res.send("hello");
  }
});

app.post("/register", function (req, res) {
  console.log(req.body);
  User.register({ username: req.body.username }, req.body.password, function (
    err,
    user
  ) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send("authenticated");
      });
    }
  });
});

app.post("/login", function (req, res) {
  passport.authenticate("local")(req, res, function (err, user, info) {
    if (err) {
      console.log(err);
    }

    if (user) {
      req.user = user;
      res.send(user.notes);
    } else {
      res.send(info);
    }
  });
});

app.listen(port);
