//include mongoose

var mongoose = require('mongoose');

//Define our schema
var movieSchema = mongoose.Schema({
    title: String,
    director: String,
    year_of_release: Number,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 10
    },
    url: String

    //the schema is first updated before sending the update request

});
//Compile our model
module.exports = mongoose.model('Movie', movieSchema);
