const verifyToken = require('./middlewares/tokenVerfication.js')

const cartController = require('../controllers/cartController');

const router = require('express').Router();

router.post('/addToCart',verifyToken,cartController.add)

router.get('/getCartDetails',verifyToken,cartController.getCartDetails)

router.delete('/deleteItem/:id',verifyToken,cartController.deleteProduct)

router.post('/findProduct',verifyToken,cartController.findProduct)

router.put('/updateProduct/:productId',verifyToken,cartController.updateProduct)

router.delete('/destroyCart',verifyToken,cartController.destroyAll)

router.get('/getCartDetailsByUserId/:id',cartController.getCartDetailsByUserId)

module.exports = router
