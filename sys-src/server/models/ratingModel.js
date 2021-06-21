//mongoose needed
let mongoose = require('mongoose');

//Palette for referencing needed
const paletteModel = require('./paletteModel');

let Schema = mongoose.Schema;

//Schema for Ratings
let RatingSchema = new Schema({
    rating: Number,
    palette_id: {
        type: Schema.Types.ObjectId, ref: paletteModel
    },
    created: Date
});


//Export function
module.exports = mongoose.model('Rating', RatingSchema);