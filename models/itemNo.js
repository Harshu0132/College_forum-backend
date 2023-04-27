module.exports = (sequelize, DataTypes)=>{
    const itemNo = sequelize.define('itemNo',{
        itemNumber: DataTypes.INTEGER,
    },
    {
        timestamps : false
    })

    return itemNo
}

