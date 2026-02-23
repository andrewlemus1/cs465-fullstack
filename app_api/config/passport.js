const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Users = require('../models/user');

passport.use(
    new LocalStrategy(
        {
        usernameField: 'email'
    },
    async (username, password, done) => {
        const q = await Users.findOne({ email: username }).exec();
            if (!q) {
                return done(null, false, {
                    message: 'Incorrect email.' 
                });
            }
            if (!q.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, q);
        }
    )
);