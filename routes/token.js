const express = require("express");
const router = express.Router();
const bl = require("../authbl");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function (username, password, done) {
    if (bl.validate({ username, password })) {
      return done(null, { username, password });
    } else {
      return done("unauthorized access", false);
    }
  })
);

const tokenAuth = () => {
  return (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error) res.status(400).json({ statusCode: 400, message: error });
      else {
        //token can saved anywhere (must shake hand client server)
        const token = jwt.sign(req.body, "selanodecourse");
        res.send(token);
      }
    })(req, res, next);
  };
};
router.post("/login/token", tokenAuth());

module.exports = router;