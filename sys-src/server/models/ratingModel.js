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

//!!Currently not yet running. Shall later directly recalculate the average_rating value of the palette.!!
// RatingSchema.statics.avg_Rating = async function(paletteId){
//     const calc = await this.aggregate([
//         {
//             $match: {paletteModel: paletteId}
//         },
//         {
//             $group: {
//                 _id: '$Palette',
//                 avg_rating: {$avg: '$Rating'}
//             }
//         }
//     ]);
//     console.log(calc);
// };
// RatingSchema.post('save', function(next){
//     this.constructor.avg_Rating(this.Palette);
// });

//Export function
module.exports = mongoose.model('Rating', RatingSchema);