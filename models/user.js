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
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
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
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        file: {
            type: DataTypes.BLOB("long"),
        },
        role:{
            type: DataTypes.STRING,

        }

    },
        {
            timestamps: true
        })

    return User
}
