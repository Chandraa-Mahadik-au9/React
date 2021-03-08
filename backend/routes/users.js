const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require('passport');

const router = express.Router();

const User = require("../models/users.js");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please Fill All The Fields." });
  }

  if (password !== password2) {
    errors.push({ message: "Both Passwords Must Be Equal." });
  }

  if (password.length < 4) {
    errors.push({ message: "Password Must Be Atleast 4 Characters Long." });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    //   res.send("All Good Till Now.");
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ message: "User Already Registerd." });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });

        // console.log(newUser);
        // res.send("Validation Successful");
        bcrypt.genSalt(10, (error, salt) =>
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error;

            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "success_msg",
                  "Registered successfully, Please Log In."
                );
                res.redirect("/users/login");
              })
              .catch((error) => console.log(error));
          })
        );
      }
    });
  }
});

router.post('/login', (req, res, next ) => {
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash("success_msg", "Logged Out successfully");
  res.redirect('/users/login');
});

module.exports = router;
