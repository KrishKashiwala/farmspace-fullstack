const express = require('express');
const router = express.Router()
const { isAuth } = require('../middleware/authMiddleware')
const baseController = require('../Controllers/baseController')
router.get('/', isAuth, baseController.baseRoute)
module.exports = router