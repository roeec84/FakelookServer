const router = require('express').Router();
const passport = require('passport')

router.get('/', passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
}))

router.get('/profile', isLoggedIn, function (req, res) {
    res.send({
      user: req.user // get the user out of session and pass to template
    });
  });

router.get('/callback',
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/error'
  }));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

module.exports = router;