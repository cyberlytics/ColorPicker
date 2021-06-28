let paletteModel = require('../models/paletteModel');

// GET one palette
exports.palette_single = async (req, res) => {
    try {
        let result = await paletteModel.findById(req.params.id).exec();
        res.send(result);
    } catch (error) {
        res.json({"status":"no result found"})
    }
};

// GET all palettes
exports.palette_all = async (req, res) => {
    try {
        let result = ""
        if(req.query.type == 'rating'){
            result = await paletteModel.find().sort({ avg_rating: req.query.sort}).exec();
        }
        else{
            result = await paletteModel.find().sort({ created: req.query.sort}).exec();
        }
        res.send(result);
    } catch (error) {
        res.json({"status":"error"})
    }
};

// POST add palette
exports.palette_add = function(req, res) {
    let name = req.body.name;
    let color = req.body.color;
    let avgRating = 0;
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
    let name = "Eine Palette 1";
    let color = ["#a9cd5b","#1e621f","#0fae12","#c1d813"];
    let avgRating = 1;
    let created = Date.now();

    let newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
      });

    //
    name = "Eine Palette 2";
    color = ["#0fae59","#a9cd5b","#0fae12"];
    avgRating = 2;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });

    //
    name = "Eine Palette 3";
    color = ["#64ae0f","#1e621f","#a9cd5b","#c1d813"];
    avgRating = 3;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
      });

    //
    name = "Eine Palette 4";
    color = ["#13d86f","#a9cd5b","#0fae59"];
    avgRating = 4;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });

    //
    name = "Eine Palette 5";
    color = ["#0fae12","#a9cd5b","#64ae0f"];
    avgRating = 5;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
      });

    //
    name = "Eine Palette 6";
    color = ["#64ae0f","#5bcd5d","#0fae59","#c1d813","#d8b713"];
    avgRating = 0;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });

    //
    name = "Eine Palette 7";
    color = ["#5bcd5d","#64ae0f","#13d86f"];
    avgRating = 2;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });

    //
    name = "Eine Palette 8";
    color = ["#1e621f","#0fae12","#5bcd5d","#c1d813","#d8b713"];
    avgRating = 1;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });

    //
    name = "Eine Palette 9";
    color = ["#5bcd5d","#1e621f","#0fae59"];
    avgRating = 1;
    created = Date.now();

    newTest = new paletteModel({name:name,color:color,avg_rating:avgRating,created:created})

    newTest.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newTest)
    });
};