const commentModel = require('../models/commentModel');
const ObjectID = require('mongodb').ObjectID;

// GET all comments with specific palette id
exports.comment_get = async (req, res) => {
    try {
        let result = await commentModel.find({ palette_id: req.params.id }, 'comment palette_id created').exec();
        res.json(result);
    } catch (error) {
        res.json({"status":"no result found"})
    }
};

// POST add comment
exports.comment_add = function(req, res) {
    let comment = req.body.comment;
    let paletteID = req.body.paletteID;
    let created = Date.now();

    let newComment = new commentModel({comment:comment,palette_id:ObjectID(paletteID),created:created})

    newComment.save(function (err) {
        if (err) return console.error(err);
        console.log("Document saved to collection");
        res.json(newComment)
      });
};