//Require Mongoose
let mongoose = require('mongoose');

//Define a schema
let Schema = mongoose.Schema;

let PaletteSchema = new Schema({
    name: String,
    color: Array,
    avg_rating: Number,
    created: Date

});

//Export function to create "PaletteModel" model class
module.exports = mongoose.model('Palette', PaletteSchema );