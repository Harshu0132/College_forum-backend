const userDetails = require('./middlewares/userDetails.js')

const registerController = require('../controllers/userController');
const upload = require("../middleware/upload");


const router = require('express').Router();

router.post('/register',upload.single("file"),registerController.register)

router.post('/login',registerController.login)

// router.get('/signUp',registerController.signUp)

router.get('/sendUserDetails',userDetails)



module.exports = router