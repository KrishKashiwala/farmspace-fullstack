const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/authMiddleware')
const farmerControllers = require('../Controllers/farmerController');

//...............GET Requests
router.get('/', farmerControllers.baseRoute)
router.get('/logout', farmerControllers.logout)
router.get('/loggedfarmer/:id', farmerControllers.loggedFarmerData)
// router.get('/protected-route', isAuth, (req, res, next) => {
// 	res.send(` ${req.user.email} made it to the route.`);
// });


//...............POST Requests............
router.post('/register', farmerControllers.createFarmer)
router.post('/login', farmerControllers.validFarmer)
module.exports = router;