module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('report', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        userName:{
            type: DataTypes.STRING,
        },
        reportBy:{
            type: DataTypes.STRING,
        },
        questionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'questions',
                key: 'id'
            }
        }

    },
        {
            timestamps: true
        })

    return Report
}
