
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

router.post('/likeCounter/:id',verifyToken,questionController.likeCounter)

router.get('/getAllLikesByQuestionId/:id',verifyToken,questionController.getAllLikesByQuestionId)

router.delete('/blockUserQuestionByQuestionId/:id',verifyToken,questionController.blockUserQuestionByQuestionId)

router.delete('/deleteQuestionByQuestionId/:id',verifyToken,questionController.deleteQuestionByQuestionId)

router.get('/getAllQuestionDetails',verifyToken,questionController.getAllQuestionDetails)


module.exports = router