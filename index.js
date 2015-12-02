
//Express
var express = require('express');
var app = express();


// express middleware
var bodyParser = require('body-parser');

//include mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-aardvark');


//Define our schema
var movieSchema = mongoose.Schema({
		title: String,
		year_of_release: Number

})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//Compile our model

var Movie = mongoose.model('Movie', movieSchema);


app.use(bodyParser.urlencoded({extended:true}));
//the movie array which was initially here has been added in the databse using POSTMAN and then deleted.

 app. get('/movies', function(req,res){
 	Movie.find(function(err,movie){
 		if(err){
 			console.log(err)
 		}else{

			res.json(movie);

 		}

 	});

 });

//The following is the route of changing movie or adding a new
 app.post('/movies/new',function(req, res){
 		console.log(req.body);
 		formData = req.body;
 		
var movie = new Movie(formData);
//save the movie, failure to the program should run an err then re-direct it to another route ie '/movies'

movie.save(function(err,movie){
	if(err){
		console.log(err);
	}else{

		console.log('Sucessfully saved the movie');
		res.redirect('/movies');
		}
		});


 });

app.get('/movies/:id', function(req, res) {
  movieId = req.params.id;

//Retrieve the movie from mongodb- we gona require mongoose
Movie.findById(movieId, function (err, movie) {
	if(err) return console.log(err);

	res.json(movie);

	});



});


			
app.listen(8082,function(){
	console.log('Server running on 127.0.0.1:8082');

});

