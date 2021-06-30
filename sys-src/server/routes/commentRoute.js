let express = require('express');
let router = express.Router();

//Controllers
let comment_controller = require('../controllers/commentController')

//Routes
router.post('/add', comment_controller.comment_add);
router.get('/all/:id', comment_controller.comment_get);


module.exports = router;