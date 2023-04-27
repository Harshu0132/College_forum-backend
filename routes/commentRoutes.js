
const commentController = require('../controllers/commentController');
const verifyToken = require('./middlewares/tokenVerfication.js')



const router = require('express').Router();

router.post('/addComment/:id',verifyToken,commentController.addComment)

router.get('/getAllCommentsByQuestionId/:id',verifyToken,commentController.getAllCommentsByQuestionId)

module.exports = router