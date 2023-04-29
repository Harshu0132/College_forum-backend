const fs = require("fs");

const db = require('../models/index');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const Question = db.question
const User = db.user
const Like = db.like

const addQuestion = async (req, res) => {

    try {
        console.log(req.body);
        console.log(req.file);
        // if (req.file == undefined) {
        //     return res.send(`You must select a proper attachment.`);
        // }
        let obj = req.body
        var createObj = new Question();

        for (let i = Object.keys(obj).length - 1; i >= 0; i--) {
            let key = Object.keys(obj)[i];
            if (obj[key] != "null") {
                createObj[key] = obj[key];
            } else {
                createObj[key] = null;
            }
        }
        if (req.params.id) {
            createObj.userId = req.params.id
        }

        if (req.file) {
            createObj.attachment = fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename);
        }
        const result = await createObj.save();
        res.send(result)

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }

}


const getAllAiAndDsQuestionDetails = async (req, res) => {
    console.log(req.body.department);
    let data = Question.findAll({
        where: {
            department: req.body.department,
        },
        include: [
            {
                model: User,
                attributes: ['userName', 'file'],
            },
            {
                model: Like,
                attributes: ['like', 'userId'],
            },
        ]
    })


    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(qd) {
        return { data: qd.dataValues }
    }
}
const getAllCseQuestionDetails = async (req, res) => {
    console.log(req.body.department);
    let data = Question.findAll({
        where: {
            department: req.body.department,
        },
        include: [
            {
                model: User,
                attributes: ['userName', 'file'],
            },
            {
                model: Like,
                attributes: ['like', 'userId'],
            },
        ]
    })


    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(qd) {
        return { data: qd.dataValues }
    }
}
const getAllCivilQuestionDetails = async (req, res) => {
    console.log(req.body.department);
    let data = Question.findAll({
        where: {
            department: req.body.department,
        },
        include: [
            {
                model: User,
                attributes: ['userName', 'file'],
            },
            {
                model: Like,
                attributes: ['like', 'userId'],
            },
        ]
    })


    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(qd) {
        return { data: qd.dataValues }
    }
}
const getAllElectronicsQuestionDetails = async (req, res) => {
    console.log(req.body.department);
    let data = Question.findAll({
        where: {
            department: req.body.department,
        },
        include: [
            {
                model: User,
                attributes: ['userName', 'file'],
            },
            {
                model: Like,
                attributes: ['like', 'userId'],
            },
        ]
    })


    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(qd) {
        return { data: qd.dataValues }
    }
}
const getAllMechanicalQuestionDetails = async (req, res) => {
    console.log(req.body.department);
    let data = Question.findAll({
        where: {
            department: req.body.department,
        },
        include: [
            {
                model: User,
                attributes: ['userName', 'file'],
            },
            {
                model: Like,
                attributes: ['like', 'userId'],
            },
        ]
    })


    data.then(function (result) {
        const arr = result.map(questionDetails)
        res.status(200).send(arr);
    })
    function questionDetails(qd) {
        return { data: qd.dataValues }
    }
}

const getDetailsByQuestionId = async (req, res) => {
    let id = req.params.id
    let data = Question.findOne({
        where: {
            id: id,
        },
        include: [{
            model: User,
            attributes: ['userName', 'file'],
        }]
    })
    console.log(data);

    data.then(function (result) {
        res.status(200).send({ data: result?.dataValues });
    })


}
const commentCounter = async (req, res) => {
    let id = req.params.id
    let data = await Question.findOne({
        where: {
            id: id,
        },
    })
    if (data?.dataValues?.commentCounter) {
        const updatedData = await Question.update({ commentCounter: data?.dataValues?.commentCounter + 1 }, {
            where: {
                id: id
            }
        })
        res.send({ msg: "comment done successfully !!" })
    } else {
        const updatedData = await Question.update({ commentCounter: 1 }, {
            where: {
                id: id
            }
        })
        res.send({ msg: "comment done successfully !!" })

    }
}
const likeCounter = async (req, res) => {
    let like = req.body.like
    let id = req.params.id
    let data = await Question.findOne({
        where: {
            id: id,
        },
    })
    if (like) {
        const updatedData = await Question.update({ likeCounter: data?.dataValues?.likeCounter + 1 }, {
            where: {
                id: id
            }
        })
        res.send({ msg: "You have successfully like the question !!" })
    }
    else {
        const updatedData = await Question.update({ likeCounter: data?.dataValues?.likeCounter - 1 }, {
            where: {
                id: id
            }
        })
        res.send({ msg: "You have successfully unlike the question !!" })

    }
}

const getAllLikesByQuestionId = async (req, res) => {
    let data = await Question.findAll({
        where: {
            id: req.params.id
        },
    })
    const info = data.map(d => {
        return d.dataValues
    })
    res.send(info);
}

module.exports = {
    addQuestion,
    getAllAiAndDsQuestionDetails,
    getAllCseQuestionDetails,
    getAllElectronicsQuestionDetails,
    getAllMechanicalQuestionDetails,
    getAllCivilQuestionDetails,
    getDetailsByQuestionId,
    commentCounter,
    likeCounter,
    getAllLikesByQuestionId,
}