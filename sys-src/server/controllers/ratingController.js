const ratingModell = require('../models/ratingModel');

exports.rating_add = function(req, res){
    let rating = req.body.rating;
    let palette_id = req.body.palette_id;
    let created = Date.now();

    //Creates a new document from the body entries
    let newRating = new ratingModell({rating: rating, palette_id: palette_id, created: created});

    newRating.save(function (err){
        if(err) return console.error(err);
        console.log('New Rating added');
        res.json(newRating);
    });
};