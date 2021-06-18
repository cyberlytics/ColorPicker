let express = require('express');
let router = express.Router();

let ratingController = require('../controllers/ratingController');

//Route to add new ratings.
router.post('/add', ratingController.rating_add);


module.exports = router;

