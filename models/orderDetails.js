module.exports = (sequelize, DataTypes)=>{
    const orderDetails = sequelize.define('orderDetails',{
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        menu: DataTypes.STRING,
        upi: DataTypes.STRING
    },
    {
        timestamps : true
    })

    return orderDetails
}

