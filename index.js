const express = require('express');
const app = express();
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/users')
const posts = require('./routes/posts')
const comments = require('./routes/comments')
const groups = require('./routes/groups');
const login = require('./routes/login');
const facebookLogin = require('./routes/facebookLogin');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const CONNECTION = `mongodb+srv://${process.env.DB}:${process.env.PASSWORD}@${process.env.HOST}?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log(`MongoDB Connected.`))
    .catch(() => console.log(`MongoDB Failed to connect.`))

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use(helmet());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.AUTH_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {
    cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: 'http://localhost:3000'
},
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    }
))
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/comments', comments)
app.use('/api/groups', groups)
app.use('/api/login', login)
app.use('/api/facebook', facebookLogin)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));