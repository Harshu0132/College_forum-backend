const orderDetailsController = require('../controllers/orderDetailsController');
const router = require('express').Router();

router.post('/order',orderDetailsController.add)

router.get('/getOrderDetails',orderDetailsController.getProduct)

module.exports = router
