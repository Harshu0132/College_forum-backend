const fs = require("fs");

const db = require('../models/index');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize')


const Report = db.report
const User = db.user


const addReport = async (req, res) => {
    let info = {
        reportBy: req.body.reportBy,
        userName: req.body.userName,
        userId: req.body.userId,
        questionId: req.params.id,
    }
    console.log(info);

    let alreadyReport = await Report.findOne({
        where: {

            [Op.and]: {
                userId: req.body.userId,
                questionId: req.params.id
            }
        }
    })

    console.log(alreadyReport);
    if (alreadyReport) {
        res.send({
            msg: false
        })
    }
    else {
        let data = await Report.create(info)
        res.send(
            { msg: true }
        );
    }

}
const getAllReportDetails = async (req, res) => {

    let data = await Report.findAll({})
    res.send(data)

}
const rejectReportByAdmin = async (req, res) => {
    try {
        let rejectedReport = await Report.destroy({
            where: {
                questionId: req.params.id
            }
        })
        res.send({
            msg: "User question has been blocked successfully !!"
        })
    } catch (error) {
        res.send(error)
    }





}





module.exports = {
    addReport,
    getAllReportDetails,
    rejectReportByAdmin

}