const passport = require('passport');
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy;
const Farmers = mongoose.model('farmerdata')
const { genPassword, validPassword } = require('../lib/passwordUtils');
const customFields = {
    usernameField: 'email',
    passwordField: 'password'
}
const verifyCallback = (username, password, done) => {

    Farmers.findOne({ email: username })
        .then((user) => {

            if (!user) { return done(null, false) }

            const isValid = validPassword(password, user.hash, user.salt);

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
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    Farmers.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});