const express = require('express');
const { getHomepage, getUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/user', getUser)

module.exports = router;

