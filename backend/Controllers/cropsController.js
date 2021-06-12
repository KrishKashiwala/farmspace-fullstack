// const mongoose = require('mongoose')
// mongoose.set('useUnifiedTopology', false)
// const Crops = mongoose.model('cropsData')
// exports.baseRoute = async (req, res) => {
//     const crops = await Crops.find({}).lean()
//     res.json(crops)
// }
// exports.TrendCrops = async (req, res) => {
//     const crops = await Crops.aggregate([{ $limit: 3 }])

//     res.json(crops)
// }
// exports.addCrops = async (req, res) => {
//     try {
//         console.log(req.params.id)
//         console.log(req.body)
//         new Crops(req.body).save((err, data) => {
//             if (err) console.log(err)
//             else {
//                 console.log(data)
//                 res.redirect(`http://localhost:3000/`)
//             }
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }
// exports.TrendVeggies = async (req, res) => {
//     const trendingveggies = await Crops.aggregate([{ $match: { cropType: "Veggies" } }, { $sort: { title: 1 } }]).limit(3)
//     res.json(trendingveggies)
// }
// exports.TrendFruits = async (req, res) => {
//     const trendingfruits = await Crops.aggregate([{ $match: { cropType: "Fruits" } }, { $sort: { title: 1 } }]).limit(3)
//     res.json(trendingfruits)
// }
// exports.TrendSpices = async (req, res) => {
//     const trendingspices = await Crops.aggregate([{ $match: { cropType: "Spices" } }, { $sort: { title: 1 } }]).limit(3)
//     res.json(trendingspices)
// }