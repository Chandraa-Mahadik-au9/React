const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require('passport');
const HomeRouter = require("./routes/index.js");
const LoginRouter = require("./routes/users.js");
const MongoAddress = require("./credentials/MyInfo.js");
const Passport = require('./credentials/passport.js');

const app = express();
const port = process.env.PORT || 9000;

Passport(passport);

const db = MongoAddress;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database is Connected.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.static(__dirname + "/public"));
app.use(expressLayouts);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", HomeRouter);
app.use("/users", LoginRouter);

// app.get("/", (req, res, next) => {
//   res.send("Hello from Node.");
// });

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`The server is running on port : ${port}.`);
});
