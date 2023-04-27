module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comments', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
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

    return Comment
}
