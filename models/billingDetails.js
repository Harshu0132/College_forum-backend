module.exports = (sequelize, DataTypes)=>{
    const cart = sequelize.define('billingDetails',{
        customerId: DataTypes.INTEGER,
        firstName: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        email: DataTypes.STRING,
        orderNotes: DataTypes.STRING,
        productNames: DataTypes.STRING,
        totalPrice: DataTypes.STRING,
        payment: DataTypes.STRING,
        paymentId: DataTypes.STRING,
 
    },
    {
        timestamps : false
    })

    return cart
}
