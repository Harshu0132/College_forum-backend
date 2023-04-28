require("dotenv").config();

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    'college_forum',
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
    })

sequelize.authenticate()
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log('error', error);
    })


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reservation = require('./reservation')(sequelize, DataTypes);
db.itemNo = require('./itemNo')(sequelize, DataTypes);
db.cart = require('./cart')(sequelize, DataTypes);
db.user = require('./user')(sequelize, DataTypes);
db.cafeDetails = require('./cafeDetails')(sequelize, Sequelize, DataTypes);

db.user.hasMany(db.cart, {
    foreignKey: 'userId'
})
db.cart.belongsTo(db.user)

db.user.hasMany(db.cafeDetails, {
    foreignKey: 'userId'
})
db.cafeDetails.belongsTo(db.user)



db.orderDetails = require('./orderDetails')(sequelize, DataTypes);

db.orderDetails = require('./orderDetails')(sequelize, DataTypes);

db.question = require('./question')(sequelize, Sequelize, DataTypes);

db.comment = require('./comments')(sequelize, Sequelize, DataTypes);
db.like = require('./likeDetails')(sequelize, Sequelize, DataTypes);


db.user.hasMany(db.question, {
    foreignKey: 'userId'
})

db.question.belongsTo(db.user)

// comment association
db.question.hasMany(db.comment, {
    foreignKey: 'questionId'

});
db.comment.belongsTo(db.question);

db.user.hasMany(db.comment, {
    foreignKey: 'userId'

});
db.comment.belongsTo(db.user);

// like association
db.user.hasMany(db.like, {
    foreignKey: 'userId'
})
db.like.belongsTo(db.user)

db.question.hasMany(db.like, {
    foreignKey: 'questionId'

});
db.like.belongsTo(db.question);

module.exports = db

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("yes re-sync");
    })
    .catch()


