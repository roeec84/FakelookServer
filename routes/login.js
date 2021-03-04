const loginService = require('../services/loginService')

const router = require('express').Router();

router.post(
    "/login",
    asyncHandler(async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await controller.login(email, password);
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    })
);

router.post("/register", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    User.register(new User({ username: username }),
        password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("register");
            }

            passport.authenticate("local")(
                req, res, function () {
                    res.render("secret");
                });
        });
});


app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}


app.get("/", function (req, res) { 
    res.render("home"); 
}); 
  
// Showing secret page 
app.get("/secret", isLoggedIn, function (req, res) { 
    res.render("secret"); 
}); 
  
// Showing register form 
app.get("/register", function (req, res) { 
    res.render("register"); 
}); 
  
// Handling user signup 
app.post("/register", function (req, res) { 
    var username = req.body.username 
    var password = req.body.password 
    User.register(new User({ username: username }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.render("register"); 
        } 
  
        passport.authenticate("local")( 
            req, res, function () { 
            res.render("secret"); 
        }); 
    }); 
}); 
  
//Showing login form 
app.get("/login", function (req, res) { 
    res.render("login"); 
}); 
  
//Handling user login 
app.post("/login", passport.authenticate("local", { 
    successRedirect: "/secret", 
    failureRedirect: "/login"
}), function (req, res) { 
}); 
  
//Handling user logout  
app.get("/logout", function (req, res) { 
    req.logout(); 
    res.redirect("/"); 
}); 
  
function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated()) return next(); 
    res.redirect("/login"); 
} 
  
var port = process.env.PORT || 3000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
}); 


module.exports = router;