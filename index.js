var http = require('http');

var dispatch = require('dispatch');
var querystring = require('querystring');

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




// static database
// var server = http.createServer(
// 				dispatch({
					
// 					'/movies' : {

// 						'GET /' :function(request, response){
// 							movies = [
// 							{
// 										title: 'Suits',
// 										category: ['Drama','Investigative','Romance'],
// 										main_actors: [{
// 												first_name: 'Harvey',
// 												second_name: 'Lawis'

// 										},{
// 												first_name: 'Micheal',
// 												second_name:'Ross'
// 										}]

										
// 									},
// 									{
// 										title: 'Constant Gardener',
// 										category: ['Drama','Mystery','Romance'],
// 										main_actors: [{
// 												first_name: 'Maley',
// 												second_name: 'Rick'
// 										},
// 										{
// 												first_name:'Ralph',
// 												second_name:'Davis'


// 										}]

										
// 									},
// 									{
// 										title: 'Beyond the Horizon',
// 										category: ['Biography','Drama','Romance'],
// 										main_actors: [{
// 												first_name: 'Maley',
// 												second_name: 'Dowen'
// 										},{}]

										
// 									}
// 							]
// 							console.log('Movies GET /')
// 							response.end(JSON.stringify(movies));
// 						},
// 						//Creating a dynamic database
// 						'POST /':function(request,response){
// 							//Get parameters from the form
// 							formData = '',
// 							request.on('data',function(chunk){
// 								formData = querystring.parse(chunk.toString());
// 							});
							
// 							request.on('end', function(){
// 								console.log(formData);
// 							//Create an instance of movie
// 								var movie = new Movie(
// 								{

// 								title: formData.title,
// 								year_of_release: formData.year_of_release
// 							}
// 							);

							//Save the movie instance
							//If successful the respond will be saved 

				// 				response.end('Movie was posted')
				// 			});
				// 		}
				// 	}



				// })
// 			);

app.listen(8082,function(){
	console.log('Server running on 127.0.0.1:8082');

});

