var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.main);

/* GET index page. */
router.get('/index', controller.main);

module.exports = router;