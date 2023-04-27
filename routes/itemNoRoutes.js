const itemNoController = require('../controllers/itemNoController');
const router = require('express').Router();

router.post('/item-count',itemNoController.add)

module.exports = router
