
const likeController = require('../controllers/likeController');
const verifyToken = require('./middlewares/tokenVerfication.js')



const router = require('express').Router();

router.post('/isLike/:id',verifyToken,likeController.isLike)

router.get('/getAllLikeStatusUserId/:id',verifyToken,likeController.getAllLikeStatusUserId)


module.exports = router