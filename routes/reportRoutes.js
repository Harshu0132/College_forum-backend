
const reportController = require('../controllers/reportController');
const verifyToken = require('./middlewares/tokenVerfication.js')

const router = require('express').Router();

router.post('/addReport/:id', verifyToken, reportController.addReport)

router.get('/getAllReportDetails', verifyToken, reportController.getAllReportDetails)

router.delete('/rejectReportByAdmin/:id', verifyToken, reportController.rejectReportByAdmin)

module.exports = router
