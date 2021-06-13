const mongoose = require('mongoose')
mongoose.set('useUnifiedTopology', false)
require('../Models/CropsSchema')
require('../Models/farmerSchema')
const Farmers = mongoose.model('farmerdata')
const Crops = mongoose.model('cropdata')
exports.baseRoute = async (req, res) => {
	const crops = await Crops.find({}).lean()
	res.json(crops)
}
exports.TrendCrops = async (req, res) => {
	const crops = await Crops.aggregate([{ $limit: 3 }])
	res.json(crops)
}
exports.addCrops = async (req, res) => {
	Farmers.findOne({ _id: req.params.id }, async (err, data) => {
		if (err) {
			console.log(err)
			res.json({ 'msg': err })
		}
		if (data) {
			const newCrop = new Crops({
				title: req.body.title,
				weight: req.body.weight,
				price: req.body.price,
				cropType: req.body.cropType,
				owner: req.body.owner
			})
			await newCrop.save()
			console.log('crop added ', newCrop)
			return res.json({ 'redirect': '/' })
		}
	})
}
exports.TrendVeggies = async (req, res) => {
	const trendingveggies = await Crops.aggregate([{ $match: { cropType: "Veggies" } }, { $sort: { title: 1 } }]).limit(3)
	res.json(trendingveggies)
}
exports.TrendFruits = async (req, res) => {
	const trendingfruits = await Crops.aggregate([{ $match: { cropType: "Fruits" } }, { $sort: { title: 1 } }]).limit(3)
	res.json(trendingfruits)
}
exports.TrendSpices = async (req, res) => {
	const trendingspices = await Crops.aggregate([{ $match: { cropType: "Spices" } }, { $sort: { title: 1 } }]).limit(3)
	res.json(trendingspices)
}