const db = require('../models/index');

const incrementItemCount = db.itemNo

const add = async (req, res)=>{
    let info = {
        itemNumber: req.body.itemNumber,
    }

    let data = await incrementItemCount.create(info)
    res.status(200).json(data);
}

module.exports = {
    add
}