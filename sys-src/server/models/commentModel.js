//mongoose needed
let mongoose = require('mongoose');

//Palette for referencing needed
const paletteModel = require('./paletteModel');

let Schema = mongoose.Schema;

//Schema for Comments
let CommentSchema = new Schema({
    comment: String,
    palette_id: {
        type: Schema.Types.ObjectId, ref: paletteModel
    },
    created: Date
});


//Export function
module.exports = mongoose.model('Comment', CommentSchema);