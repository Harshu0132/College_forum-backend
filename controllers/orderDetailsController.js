const db = require('../models/index');

const Order = db.orderDetails

const add = async (req, res)=>{
    let info = {
        name: req.body.name,
        address: req.body.address,
        menu: req.body.menu,
    }

    let data = await Order.create(info)
    res.status(200).json(data);
}

const getProduct = async (req, res) => {
    let data = await Order.findAll({});
    res.status(200).json(data);
}


module.exports = {
    add,
    getProduct
}