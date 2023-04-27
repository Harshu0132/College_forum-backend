const fs = require("fs");

const db = require('../models/index');
const jwt = require('jsonwebtoken');

const Comment = db.comment
const User = db.user


const addComment = async (req, res) => {

    let info = {
        description: req.body.description,
        userId: req.body.userId,
        questionId: req.params.id,
    }

    let data = await Comment.create(info)
    res.send(data);

}
const getAllCommentsByQuestionId = async (req, res) => {

    let data = Comment.findAll({
        where: {
            questionId: req.params.id
        },
        include: [{
            model: User,
            attributes: ['userName', 'file'],
        }]
        
    })
    
    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(c) {
        return { data: c.dataValues }
    }


}





module.exports = {
    addComment,
    getAllCommentsByQuestionId
   
}