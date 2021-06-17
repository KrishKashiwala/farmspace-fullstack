const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const { isAuth } = require('../middleware/authMiddleware')
const farmerControllers = require('../Controllers/farmerController');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../images')
	},
	filename: (req, file, cb) => {
		console.log(file)
		cb(null, Date.now() + path.extname(file.originalname))
	}
})
const upload = multer({ storage: storage })
//...............GET Requests.............
router.get('/', isAuth, farmerControllers.baseRoute)
router.get('/logout', isAuth, farmerControllers.logout)
router.get('/loggedfarmer/:id', isAuth, farmerControllers.loggedFarmerData)
// router.get('/protected-route', isAuth, (req, res, next) => {
// 	res.send(` ${req.user.email} made it to the route.`);
// });


//...............POST Requests............
router.post('/register', upload.single("image"), farmerControllers.createFarmer)
router.post('/login', farmerControllers.validFarmer)
module.exports = router;