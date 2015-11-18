var http = require('http');

var dispatch = require('dispatch');
var querystring = require('querystring');

//include mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-aardvark');


//Define our schema
var movieSchema = mongoose.Schema({
		name:String,
		year_of_relaese:Number

})
//Compile our model

var Movie = mongoose.model('Movie', movieSchema);

// static database
var server = http.createServer(
				dispatch({
					
					'/movies' : {

						'GET /' :function(request, response){
							movies = [
							{
										title: 'Suits',
										category: ['Drama','Investigative','Romance'],
										main_actors: [{
												first_name: 'Harvey',
												second_name: 'Lawis'

										},{
												first_name: 'Micheal',
												second_name:'Ross'
										}]

										
									},
									{
										title: 'Constant Gardener',
										category: ['Drama','Mystery','Romance'],
										main_actors: [{
												first_name: 'Maley',
												second_name: 'Rick'
										},
										{
												first_name:'Ralph',
												second_name:'Davis'


										}]

										
									},
									{
										title: 'Beyond the Horizon',
										category: ['Biography','Drama','Romance'],
										main_actors: [{
												first_name: 'Maley',
												second_name: 'Dowen'
										},{}]

										
									}
							]

							response.end(JSON.stringify(movies));
						},
						//Creating a dynamic database
						'POST /':function(request,response){
							//Get parameters from the form
							formData = '',
							request.on('data',function(chunk){
								formData = querystring.parse(chunk.toString());
							});
							
							request.on('end', function(){
								console.log(formData);
							//Create an instance of movie
								var movie = new Movie(
								{

								title: formData.title,
								year_of_release: formData.year_of_release
							}
							);

							//Save the movie instance
							//If successful the respond will be saved 

								response.end('Movie was posted')
							});
						}
					}



				})
			);

server.listen(8081,function(){
	console.log('Server running on 127.0.0.1:8081');

});

