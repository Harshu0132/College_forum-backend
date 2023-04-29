const db = require('../models/index');
const { Op } = require('sequelize')

const Like = db.like
const User = db.user


const isLike = async (req, res) => {
    let findData = await Like.findOne({
        where: {
            [Op.and]: {
                userId: req.body.userId,
                questionId: req.params.id

            }
        }
    })

    if (findData == null) {
        let info = {
            like: req.body.like,
            userId: req.body.userId,
            questionId: req.params.id,
        }
        let data = await Like.create(info)
        res.send(data);

    } else {
        console.log(req.body.like);
      
        const data = await Like.update({ like: req.body.like }, {
            where: {
                questionId: req.params.id
            }
        })
        res.send(data);
    } 

}



const getLikeStatusUserId = async (req, res) => {
    let data = await Like.findOne({
        where: {
            [Op.and]: {
                userId: req.body.userId,
                questionId: req.params.id
            }
        },
    })
    res.send({ like: data?.dataValues?.like })
}
const getAllLikesByQuestionId = async (req, res) => {
    let data = await Like.findOne({
        where: {
            questionId: req.params.id
        },
    })
    res.send(data);
}





module.exports = {
    isLike,
    getLikeStatusUserId,
    getAllLikesByQuestionId

}