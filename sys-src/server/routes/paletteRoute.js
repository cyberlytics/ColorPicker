let express = require('express');
let router = express.Router();

//Controllers
let palette_controller = require('../controllers/paletteController')

//Routes
router.get('/all', palette_controller.palette_all);
router.get('/:id', palette_controller.palette_single);
router.post('/add', palette_controller.palette_add);

router.get('/add_test', palette_controller.palette_add_test);

module.exports = router;