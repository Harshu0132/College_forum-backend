
const questionController = require('../controllers/questionController');
const upload = require("../middleware/upload");
const verifyToken = require('./middlewares/tokenVerfication.js')



const router = require('express').Router();

router.post('/addQuestion/:id',upload.single("file"),verifyToken,questionController.addQuestion)

router.post('/getAllAiAndDsQuestionDetails',verifyToken,questionController.getAllAiAndDsQuestionDetails)

router.post('/getAllCseQuestionDetails',verifyToken,questionController.getAllCseQuestionDetails)

router.post('/getAllCivilQuestionDetails',verifyToken,questionController.getAllCivilQuestionDetails)

router.post('/getAllElectronicsQuestionDetails',verifyToken,questionController.getAllElectronicsQuestionDetails)

router.post('/getAllMechanicalQuestionDetails',verifyToken,questionController.getAllMechanicalQuestionDetails)

router.get('/getDetailsByQuestionId/:id',verifyToken,questionController.getDetailsByQuestionId)

module.exports = router