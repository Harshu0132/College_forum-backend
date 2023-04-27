const verifyToken = require('./middlewares/tokenVerfication.js')

const reservationController = require('../controllers/reservationController');
const router = require('express').Router();

router.post('/reservation',verifyToken,reservationController.add)

router.get('/getBookingDetails',verifyToken,reservationController.getBookingDetails)

module.exports = router