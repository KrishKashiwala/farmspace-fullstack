const passport = require('passport');
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy;
const Farmers = mongoose.model('farmerdata')
const bcrypt = require('bcrypt')
const { genPassword, validPassword } = require('../lib/passwordUtils');
const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}
const verifyCallback = (username, password, done) => {

    Farmers.findOne({ email: username })
        .then((user) => {

            if (!user) { return done(null, false) }

            const isValid = bcrypt.compare(user.password, password)

            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {
            done(err);
        });

}
const strategy = new LocalStrategy(customFields, verifyCallback)
passport.use(strategy);
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((_id, done) => {
    Farmers.findById(_id)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});