const mongoose = require('mongoose')
const passport = require('passport')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
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
    Farmers.findOne({ email: req.body.email }, async (err, data) => {
        if (err) {
            console.log(err)
            res.json({ 'msg': err })
        }
        if (data) {
            console.log('not created')
            var redir = { redirect: '/login' };
            return res.json(redir);
        }
        if (!data) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const newFarmer = new Farmers({

                email: req.body.email,
                password: hashedPassword,

            })
            await newFarmer.save()
            console.log('farmer created')
            var redir = { redirect: '/login' };
            return res.json(redir);
        }
    })

}

// router.get('/success-login', (req, res, next) => {
//     res.json({ 'val': req.user, 'redirect': '/' })
// })
// router.get('/failed-login', (req, res, next) => {
//     res.json({ 'redirect': '/error' })
// })
exports.validFarmer = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) {
            console.log('redirected to login')
            res.json({ 'redirect': '/error' });
        }
        req.login(user, (err) => {
            console.log('hello user', user)
            res.json({ 'val': user, 'redirect': '/' })
        });
    })(req, res, next)
}
exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/')
}
exports.loggedFarmerData = (req, res) => {
    Farmers.findById({ _id: req.params.id }, (err, data) => {
        if (err) console.log(err)
        else {
            res.json(data)
        }
    })
}