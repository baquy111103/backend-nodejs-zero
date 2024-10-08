const express = require('express');
const { getHomepage, getUser, postCreateUser, getCreatePage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);
router.get('/user', getUser)

router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router;

