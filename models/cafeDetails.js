module.exports = (sequelize, Sequelize, DataTypes) => {
    const cafe = sequelize.define('CafeDetails', {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        cafeName: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        location: DataTypes.STRING,
        status: DataTypes.STRING,
        file: {
            type: DataTypes.BLOB("long"),
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
        
    },
        {
            timestamps: true
        })
    return cafe
}
