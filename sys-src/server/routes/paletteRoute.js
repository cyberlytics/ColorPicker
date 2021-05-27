let express = require('express');
let router = express.Router();

//Controllers
let palette_controller = require('../controllers/paletteController')

//Routes
router.get('/all', palette_controller.palette_all);
router.get('/add_test', palette_controller.palette_add_test);

router.post('/add', palette_controller.palette_add);

module.exports = router;