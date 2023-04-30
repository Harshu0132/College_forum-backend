const userDetails = require('./middlewares/userDetails.js')
const verifyToken = require('./middlewares/tokenVerfication.js')


const registerController = require('../controllers/userController');
const upload = require("../middleware/upload");


const router = require('express').Router();

router.post('/register', upload.single("file"), registerController.register)

router.put('/updateUser/:id', upload.single("file"), verifyToken, registerController.updateUser)

router.post('/login', registerController.login)

router.get('/getUserNameByUserId/:id', registerController.getUserNameByUserId)

router.post('/getDetailsByDesignation', registerController.getDetailsByDesignation)

router.get('/getAllUserDetails/:id', registerController.getAllUserDetails)

// router.get('/signUp',registerController.signUp)

router.get('/sendUserDetails', userDetails)



module.exports = router