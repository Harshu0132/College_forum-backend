const db = require('../models/index');

const createReservation = db.reservation

const add = async (req, res)=>{
    let info = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        noOfPerson: req.body.noOfPerson,
        time: req.body.time,
        date: req.body.date
    }

    try {
        let data = await createReservation.create(info)
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
    }

}

const getBookingDetails = async (req,res)=>{
    try {
        let data = await createReservation.findAll({})
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    add,
    getBookingDetails
}