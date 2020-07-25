const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const aes256 = require("aes256");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const lodash = require("lodash");

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

const noteSchema = new mongoose.Schema({
  text: String,
  color: String,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  notes: [noteSchema],
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
    const new_notes = _.map(req.body.notes, (note) => ({
      ...note,
      text: aes256.encrypt(process.env.ENC_KEY, note.text),
    }));

    User.updateOne({ _id: req.user.id }, { notes: new_notes }, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("success");
      }
    });
  } else {
    console.log("shouldn't be reachable from front end");
  }
}

function get_data(req, res) {
  if (req.isAuthenticated()) {
    return _.map(req.user.notes, (note) => ({
      ...note,
      text: aes256.decrypt(process.env.ENC_KEY, note.text),
    }));
  } else {
    console.log("shouldn't be reachable from front end");
  }
}

// const user = new User({
//   username: 'asdf@asdf.com',
//   password: 'test',
//   notes: [{text: 'lol', color: 'red'}, {text: 'test', color:"white"}]
// })

// user.save()

app.get("/", function (req, res) {
  console.log(req.user);
  return res.sendFile(path.join(publicPath, "index.html"));
});

app.use("/", express.static(publicPath));

app.post("/register", function (req, res) {
  console.log(req.body);
  User.register(
    { username: req.body.username, notes: JSON.parse(req.body.notes) },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function () {
          res.send("authenticated");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  console.log(req.body);
  passport.authenticate("local")(req, res, function () {
    console.log(req.user);
    res.send(req.user.notes);
  });
});

app.listen(port);
