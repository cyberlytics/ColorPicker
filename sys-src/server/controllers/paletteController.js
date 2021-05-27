let paletteModel = require('../models/paletteModel');

// GET all palettes
exports.palette_all = async (req, res) => {
    try {
        let result = await paletteModel.find().exec();
        res.send(result);
    } catch (error) {
        res.json({"status":"error"})
    }
};

// POST add palette
exports.palette_add = function(req, res) {
    let name = req.body.name;
    let color = req.body.color;
    let avgRating = null;
    let created = Date.now();

    let newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
      });
};

// TEST ohne POST data /palette/add_test
exports.palette_add_test = function(req, res) {
    let name = "Eine Palette";
    let color = ["abc","cba","cab"];
    let avgRating = 3;
    let created = Date.now();

    let newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
      });
};