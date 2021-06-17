const mongoose = require('mongoose')
const passport = require('passport')
const express = require('express')
const app = express()
const router = express.Router()
const bcrypt = require('bcrypt')
const { genPassword, validPassword } = require('../lib/passwordUtils');
require('../config/passportConfig')
mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Farmers = mongoose.model('farmerdata')

exports.baseRoute = async (req, res, next) => {
    res.json({ 'val': req.user, 'flag': true })
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
                fname: req.body.fname,
                lname: req.body.lname,
                bday: req.body.bday,
                city: req.body.city,
                state: req.body.state,
                pincode: req.body.pincode,
                address: req.body.address,
                mobileNo: req.body.mobileNo,
                confirmPassword: req.body.confirmPassword,
                email: req.body.email,
                password: hashedPassword,
                image: req.body.image
            })
            console.log(newFarmer)
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
    req.session.destroy((err) => {
        if (err) console.log(err)
        res.json({ 'redirect': '/' })
    })
}
exports.loggedFarmerData = (req, res) => {

    Farmers.findById({ _id: req.params.id }, (err, data) => {
        if (err) console.log(err)
        else {
            res.json(data)
        }
    })


}