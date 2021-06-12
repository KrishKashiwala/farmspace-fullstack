const mongoose = require('mongoose')
const passport = require('passport')
const { genPassword, validPassword } = require('../lib/passwordUtils');
require('../config/passportConfig')
const Farmers = mongoose.model('farmerdata')
exports.baseRoute = async (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send(`${req.user.email}` + ' made it to the route. <br> ok now <a href="/logout"> logout</a>');
    }
    else {
        res.send('<h1>Home</h1><p>Please <a href="/register">register</a>&nbsp;<a href="/login">login</a></p>');
    }
}
exports.createFarmer = (req, res, next) => {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new Farmers({
        email: req.body.email,
        password: hash
    });

    newUser.save()
        .then((user) => {
            console.log('this is user')
            console.log('this is user', user);
        });

    res.json({ 'redirect': '/login' })

}

exports.validFarmer = (req, res, next) => {
    passport.authenticate('local', { failureRedirect: '/failed-login', successRedirect: '/success-login' })

}
exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/')
}
