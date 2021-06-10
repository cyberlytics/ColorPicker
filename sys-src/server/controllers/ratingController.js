const ratingModell = require('../models/ratingModel');
const paletteModell = require('../models/paletteModel');
const ObjectID = require('mongodb').ObjectID;

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

    //Groups all documents that have the same pallet ID and then calculates the average value of the field rating
    ratingModell.aggregate([{
        "$group": {
            "_id": ObjectID(palette_id),
            "avg_rating": {
                "$avg": "$rating"
            }
        }
    }]).then(result => {
        //if there was a result it will be worked with further
        if(result){
            //Query for the palette collection to find the palette with the correct _id
           let query = {_id: ObjectID(palette_id)};

           //Update variable that assigns the new calculated value to the avg_rating field.
           let update = {
               $set: {
                   avg_rating: result[0].avg_rating
               }
           };
           //Calls the updateOne function of mongoose with the values from query and update
           paletteModell.updateOne(query, update).exec();
    }}).catch(err => console.error(`Failed to find Document: ${err}`));
};