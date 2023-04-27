require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;
const cors = require('cors');

// const initRoutes = require("../../Angular/Client cafe/src/routes/web");

global.__basedir = __dirname;

app.use(cors("*"))

app.listen(port, () => {
    console.log("server is running");
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./models/index')

const ReservationRouter = require('./routes/reservationRoutes');
app.use('/api', ReservationRouter)

const itemNoRoutes = require('./routes/itemNoRoutes');
app.use('/api', itemNoRoutes)

const cartRoutes = require('./routes/cartRoutes');
app.use('/api', cartRoutes)

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes)

const orderRoutes = require('./routes/orderDetailsRoutes');
app.use('/api', orderRoutes)

const CafeRoutes = require('./routes/cafeDetailsRoutes');
app.use('/api', CafeRoutes)

const QuestionRoutes = require('./routes/questionRoutes');
app.use('/api', QuestionRoutes)



