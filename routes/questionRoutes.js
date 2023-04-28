
const questionController = require('../controllers/questionController');
const upload = require("../middleware/upload");
const verifyToken = require('./middlewares/tokenVerfication.js')



const router = require('express').Router();

router.post('/addQuestion/:id',upload.single("file"),verifyToken,questionController.addQuestion)

router.post('/getAllAiAndDsQuestionDetails',verifyToken,questionController.getAllAiAndDsQuestionDetails)

router.post('/getAllCseQuestionDetails/:id',verifyToken,questionController.getAllCseQuestionDetails)

router.post('/getAllCivilQuestionDetails',verifyToken,questionController.getAllCivilQuestionDetails)

router.post('/getAllElectronicsQuestionDetails',verifyToken,questionController.getAllElectronicsQuestionDetails)

router.post('/getAllMechanicalQuestionDetails',verifyToken,questionController.getAllMechanicalQuestionDetails)

router.get('/getDetailsByQuestionId/:id',verifyToken,questionController.getDetailsByQuestionId)

router.get('/commentCounter/:id',verifyToken,questionController.commentCounter)

router.get('/likeCounter/:id',verifyToken,questionController.likeCounter)

router.get('/unLikeCounter/:id',verifyToken,questionController.unLikeCounter)

router.get('/getAllLikesByQuestionId/:id',verifyToken,questionController.getAllLikesByQuestionId)


module.exports = router