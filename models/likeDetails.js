module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define('likes', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },

        questionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'questions',
                key: 'id'
            }
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

    return Like
}
