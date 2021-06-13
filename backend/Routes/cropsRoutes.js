const express = require('express');
const router = express.Router();
const cropsControllers = require('../Controllers/cropsController')
// ............... GET Requests ..............
router.get('/', cropsControllers.baseRoute)
router.get('/trendingvegetables', cropsControllers.TrendVeggies)
router.get('/trendingfruits', cropsControllers.TrendFruits)
router.get('/trendingspices', cropsControllers.TrendSpices)

// ...............POST Requests................

router.post('/addcrop/:id', cropsControllers.addCrops)


module.exports = router;