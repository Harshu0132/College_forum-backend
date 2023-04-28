const db = require('../models/index');
const {Op} =  require ('sequelize')

const Like = db.like
const User = db.user


const isLike = async (req, res) => {
    let findData = await Like.findAll({
        where: {

            [Op.and]: {
                userId: req.body.userId,
                questionId: req.params.id

            }
        }
    })

    if (findData == '' || findData == []) {
        let info = {
            like: req.body.like,
            userId: req.body.userId,
            questionId: req.params.id,
        }
        let data = await Like.create(info)
        res.send(data);
    } else {
        const isLike = findData.map((f) => {
            return f.dataValues.like
        })
        console.log(isLike);
        // console.log(req.params.id);
        if (isLike == [false]) {
            console.log(isLike);
            const data = await Like.update({ like: req.body.like }, {
                where: {
                    id: req.params.id
                }
            })
            res.send(data);
        }
        else {
            console.log(isLike);
            const data = await Like.update({ like: req.body.like }, {
                where: {
                    id: req.params.id
                }
            })
            res.send(data);
        }
    }
}



const getAllLikeStatusUserId = async (req, res) => {
    let data = await Like.findOne({
        where: {
            userId: req.params.id
        },
    })

    res.send(data);
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
    getAllLikeStatusUserId,
    getAllLikesByQuestionId

}