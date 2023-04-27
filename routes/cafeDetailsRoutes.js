const verifyToken = require('./middlewares/tokenVerfication.js')

const cafeController = require('../controllers/cafeController');
const upload = require("../middleware/upload");
const router = require('express').Router();

router.post('/addCafe/:id',upload.single("file"),verifyToken, cafeController.addCafe)

router.get('/getApprovedCafeDetails',verifyToken, cafeController.getApprovedCafeDetails)

router.get('/getUnapprovedCafeDetails',verifyToken, cafeController.getUnapprovedCafeDetails)

router.delete('/deleteCafe/:id',verifyToken, cafeController.deleteCafe)

router.put('/cafeApproval/:id',verifyToken, cafeController.cafeApproval)

router.get('/getApprovedCafeDetailsById/:id',verifyToken, cafeController.getApprovedCafeDetailsById)

module.exports = router
