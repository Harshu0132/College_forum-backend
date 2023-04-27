module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        subject: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        questionBody: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        department: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        attachment: {
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

    return Question
}
