///include mongoose

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

//Define our schema
//Redefined our schema to accept form validation
var userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password:  String, 
    email: {type: String, required: true}
    });

//set plugin
userSchema.plugin(passportLocalMongoose);

    //Compile our model
 module.exports = mongoose.model('User', userSchema);