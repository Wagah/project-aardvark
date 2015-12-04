
//Express
var express = require('express');
var cons = require("consolidate");//we require the consolidae here
var app = express();


// express middleware
var bodyParser = require('body-parser');

//include mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-aardvark');


//Define our schema
var movieSchema = mongoose.Schema({
    title: String,
    year_of_release: Number,
    rating: {type: Number, default: 0, min: 0, max: 10},
    url: String,
    director: String
    //the schema is first updated before sending the update request

})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Compile our model

var Movie = mongoose.model('Movie', movieSchema);

//EXpress setting
app.engine('html', cons.liquid);

app.set('views', './views');
app.set('view engine', 'html');

//Express middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
//the movie array which was initially here has been added in the databse using POSTMAN and then deleted.

app.get('/movies/new', function(req, res){

    res.render('new');

});

app.get('/movies', function(req, res) {
    Movie.find()
    	.select("title year_of_release rating director")
    	.exec(function(err, movies) {
        if (err) {
            console.log(err);
        } else {
        	res.render('index',{"movies": movies});
            // res.json(movies);

        }

    });

});


//The following is the route of changing movie or adding a new
app.post('/movies', function(req, res) {
    console.log(req.body);
    formData = req.body;

    var movie = new Movie(formData);
    //save the movie, failure to the program should run an err then re-direct it to another route ie '/movies'

    movie.save(function(err, movie) {
        if (err) {
            console.log(err);
        } else {

            console.log('Sucessfully saved the movie');
            res.redirect('/movies');
        }
    });


});

app.get('/movies/:id', function(req, res) {
    movieId = req.params.id;

    //Retrieve the movie from mongodb- we gona require mongoose
    Movie.findById(movieId, function(err, movie) {
        if (err) return console.log(err);
        res.render('detail',{"movie": movie});
        // res.json(movie);

    });

});

//Performing an updata in the database: At first we added the updated element in the schema then proceed
//to send a http request using PUT request
app.put('/movies/:id', function(req, res) {
    movieId = req.params.id;
    userRating =req.body.rating;

    //Retrieve the movie from mongodb- we gona require mongoose
    Movie.findById(movieId, function(err, movie) {
        if (err) return console.log(err);

        movie.rating = userRating;

        movie.save(function(err,movie){
        	if(err) return console.log(err);
        	res.json(movie);
        });

    });

});

app.delete('/movies/:id', function(req, res) {
    movieId = req.params.id;

    //Retrieve the movie from mongodb- we gona require mongoose
    Movie.remove({_id:movieId}, function(err){
    	if(err) return console.log(err);
    	res.send("Movie was deleted");

   	 });
   });


app.listen(8082, function() {
    console.log('Server running on 127.0.0.1:8082');

});
