
const likeController = require('../controllers/likeController');
const verifyToken = require('./middlewares/tokenVerfication.js')



const router = require('express').Router();

router.post('/isLike/:id',verifyToken,likeController.isLike)

router.post('/getLikeStatusUserId/:id',verifyToken,likeController.getLikeStatusUserId)


module.exports = router