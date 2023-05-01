const fs = require("fs");

const db = require('../models/index');
const jwt = require('jsonwebtoken');
const sharp = require('sharp');

const User = db.user

const register = async (req, res) => {

    try {
        // console.log(req.body);
        // console.log(req.file);
        // if (req.file == undefined) {
        //     return res.send(`You must select a file.`);
        // }
        let obj = req.body
        var createObj = new User();

        for (let i = Object.keys(obj).length - 1; i >= 0; i--) {
            let key = Object.keys(obj)[i];
            if (obj[key] != "null") {
                createObj[key] = obj[key];
            } else {
                createObj[key] = null;
            }
        }
        // try {
        //     if (req.file) {
        //         console.log(req.file);
        //         createObj.file = await resizeAndCompressImage(req.file.filename)
        //         console.log(createObj.file);
        //         // createObj.file = fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
      
        // console.log(createObj);
        const result = await createObj.save();

        // Delete the file from the upload directory
        // if (req.file) {
        //     fs.unlink(__basedir + "/assets/uploads/" + req.file.filename, (err) => {
        //         if (err) {
        //             console.error(err)
        //             return
        //         }
        //         console.log("File deleted successfully")
        //     })
        // }
        res.send(result)

    } catch (error) {
        const msg = error.errors.reduce((acc, e) => {
            return acc + e.message
        }, '')
        return res.status(400).send({
            msg: msg
        });
    }

}

const login = async (req, res) => {

    try {
        console.log(req.body.email);
        let data = await User.findOne({ where: { email: req.body.email } });
        console.log(data.dataValues.email);
        if (req.body.email == data.dataValues.email) {
            if (req.body.password == data.dataValues.password) {
                let payload = { id: data.id, role: data.role }
                const token = jwt.sign(payload, process.env.JWT_SECRET)
                res.status(200).json({ token })

            } else {
                res.status(400).json({
                    msg: "plz.. enter valid password"
                });
            }
        } else {
            res.status(400).json({
                msg: "plz.. enter valid email"
            });
        }
    }
    catch (e) {
        // console.log(e);  
        if (e) {
            console.log(e);
            res.json({
                msg: "Plz.. enter valid email"
            })
        }
    }
}

const resizeAndCompressImage = async (buffer) => {
    const resizedImageBuffer = await sharp(buffer)
        .resize({ width: 800 })
        .jpeg({ quality: 80 })
        .toBuffer();

    return resizedImageBuffer;
};

const getUserNameByUserId = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ username: data.dataValues.username })
}
const getDetailsByDesignation = async (req, res) => {
    const data = await User.findAll({
        where: {
            designation: req.body.designation
        }
    })

    let info = data.map(d => {
        return d?.dataValues
    })
    res.send(info);
}
const getAllUserDetails = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send(data.dataValues);
}



const updateUser = async (req, res) => {
    let id = req.params.id
    let obj = req.body
    var createObj = new User();
    for (let i = Object.keys(obj).length - 1; i >= 0; i--) {
        let key = Object.keys(obj)[i];
        if (obj[key] != "null") {
            createObj[key] = obj[key];
        } else {
            createObj[key] = null;
        }
    }

    if (req.file) {
        createObj.file = fs.readFileSync(__basedir + "/assets/uploads/" + req.file.filename);
    }

    const newObj = createObj.dataValues
    // console.log();
    const data = await User.update(newObj, {
        where: {
            id: id
        }
    })

    // Delete the file from the upload directory
    if (req.file) {
        fs.unlink(__basedir + "/assets/uploads/" + req.file.filename, (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("File deleted successfully")
        })
    }

    res.send(data);

}


module.exports = {
    register,
    login,
    getUserNameByUserId,
    getDetailsByDesignation,
    getAllUserDetails,
    updateUser
    // signUp
}