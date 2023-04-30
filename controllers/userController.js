const fs = require("fs");

const db = require('../models/index');
const jwt = require('jsonwebtoken');

const User = db.user

const register = async (req, res) => {

    try {
        console.log(req.body);
        console.log(req.file);
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
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
        const result = await createObj.save();
        res.send(result)

    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }

}
// const signUp = async (req, res) => {
//     let info = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         phone: req.body.phone,
//         email: req.body.email,
//         password: req.body.password,
//     }
//     try {
//         let data = await User.create(info)
//         if(data){

//             res.status(200).json({ data })
//         }
//     }
//     catch (e) {
//         console.log(e);
//         e.errors.forEach((error) => {
//             console.log(error.message);
//             if (error.message == 'email must be unique') {
//                 res.status(403).json({
//                     msg: "email already exist"
//                 })
//             }
//         });
//     }
// }

const login = async (req, res) => {

    try {
        console.log(req.body.email);
        let data = await User.findOne({ where: { email: req.body.email } });
        console.log(data.dataValues.email);
        if (req.body.email == data.dataValues.email) {
            if (req.body.password == data.dataValues.password) {
                // console.log(data.id);
                // console.log(data.role);
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

const getUserNameByUserId = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({username: data.dataValues.username})
}


module.exports = {
    register,
    login,
    getUserNameByUserId
    // signUp
}