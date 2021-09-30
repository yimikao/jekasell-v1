var express = require('express');
var router = express.Router();

const productController = require('../controllers/product')


router.get('/', productController.index)
router.post('/', productController.store)

module.exports = router;
