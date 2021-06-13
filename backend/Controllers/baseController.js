const mongoose = require('mongoose')
const Farmers = mongoose.model('farmerdata')
const express = require('express')
const app = express()
mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
exports.baseRoute = (req, res) => {

	Farmers.findOne({ _id: req.user._id }, (err, data) => {
		if (err) console.log(err)
		res.json({ 'data': data })
	})
}