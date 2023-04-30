module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        middleName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        contactNo: {
            type: DataTypes.BIGINT,
            allowNull: true,
            unique: true

        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pinCode: {
            type: DataTypes.STRING,
        },
        designation: {
            type: DataTypes.STRING,
        },
        department: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true

        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        },
        file: {
            type: DataTypes.BLOB("long"),
        },
        role: {
            type: DataTypes.STRING,

        }

    },
        {
            timestamps: true
        })

    return User
}
