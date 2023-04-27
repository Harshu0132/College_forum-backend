const fs = require("fs");
const db = require('../models/index');
const { Op } = require("sequelize");


const cafe = db.cafeDetails

const addCafe = async (req, res) => {
    try {

        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        let obj = req.body
        var createObj = new cafe();
        // console.log("obj------------", obj);
        // console.log("createObj", createObj);
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
            createObj.file = fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename);
        }
        // console.log(req.file.filename);
        // const data = cafe.create({
        //     type: req.file.mimetype,
        //     name: req.file.originalname,
        //     cafeName: JSON.stringify(obj.cafeName),
        //     description: JSON.stringify(obj.description),
        //     price: JSON.stringify(obj.price),
        //     location: JSON.stringify(obj.location),
        //     file: fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename),
        // }).then((image) => {
        //     console.log(image);
        //     fs.writeFileSync(__basedir + "/assets/tmp/" + image.name,
        //         image.file
        //     );
        // })
        let result = await createObj.save();
        res.send(result)

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }
}

const getUnapprovedCafeDetails = async (req, res) => {
    let data = cafe.findAll({
        where:{
            status: 'false'
        }
    })
    data.then(function (result) {
        const arr = result.map(cafeDetails)
        // console.log(arr);
        res.status(200).send(arr);
    })
    function cafeDetails(cd) {
        // console.log(cd.dataValues);
        return { data: cd.dataValues }
    }
}
const getApprovedCafeDetails = async (req, res) => {
    let data = cafe.findAll({
        where:{
            status: 'true'
        }
    })
    data.then(function (result) {
        const arr = result.map(cafeDetails)
        // console.log(arr);
        res.status(200).send(arr);
    })
    function cafeDetails(cd) {
        // console.log(cd.dataValues);
        return { data: cd.dataValues }
    }
}
const getApprovedCafeDetailsById = async (req, res) => {
    let data = cafe.findOne({
        where:{
            [Op.and]: [{id: req.params.id},{status: 'true'}]
        }
    })
    data.then((d)=>{
        res.send(d.dataValues)
    })
}


const deleteCafe = async (req, res) => {
    try {
        let data = await cafe.destroy({ where: { id: req.params.id } });
        res.send({
            msg: "Cafe rejected successfully !!"
        })
        
    } catch (error) {
        console.log(error);
    }
}

const cafeApproval = async (req, res) => {
    try {
        let obj = {
            status: 'true'
        }
        let data = await cafe.update(obj, { where: { id: req.params.id } });
        res.send({
            msg: "Cafe approved successfully !!"
        })
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addCafe,
    getUnapprovedCafeDetails,
    getApprovedCafeDetails,
    deleteCafe,
    cafeApproval,
    getApprovedCafeDetailsById
    
}

