//we include router
//we define and require express

var express = require('express');
// var app = express();
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



var router = express.Router();
var Movie = require('../models/movie');

router.route('/movies')
    .get(function(req, res) {
        Movie.find()
            .select("title year_of_release rating director")
            .exec(function(err, movies) {
                if (err) {
                    console.log(err);
                } else {
                    res.render('movies/index', {
                       "movies": movies
                    });
                     // res.json(movies);
                }

            });

    })
    .post(function(req, res) {
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


router.route('/movies/new')
    .get(function(req, res) {
        res.render('./movies/new');
    });


router.route('/movies/:id')
    .get(function(req, res) {
        movieId = req.params.id;
        //Retrieve the movie from mongodb- we gona require mongoose
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);
            res.render('./movies/detail', {
               "movie": movie
           });
            // res.json(movie);
        });
    })
    .put(function(req, res) {
        updateMovie('PUT', req, res);

    })
    .delete(function(req, res) {
        deletMovie('DELETE', req, res);
    });

router.route('/movies/:id/edit')
    .get(function(req, res) {
        movieId = req.params.id;
        //To refill the content of the movie before editing
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);
            res.render('./movies/edit', {
                "movie": movie
            });
            // res.json(movie);
        });

    })
    .post(function(req, res) {
        updateMovie('POST', req, res);
    });

router.route('/movies/:id/delete')
    .get(function(req, res) {
        deletMovie('GET', req, res);
    });

//Retrieve the movie from mongodb- we gona require mongoose

//The following is the route of changing movie or adding a new
//Performing an updata in the database: At first we added the updated element in the schema then proceed
//to send a http request using PUT request

function updateMovie(method, req, res) {
    movieId = req.params.id;
    userRating = req.body.rating;
    userTitle = req.body.title;
    userYearOfRelease = req.body.year_of_release;
    userDirector = req.body.director;
    //Retrieve the movie from mongodb- we gona require mongoose
    Movie.findById(movieId, function(err, movie) {
        if (err) return console.log(err);
        movie.rating = userRating;
        movie.title = userTitle;
        movie.year_of_release = userYearOfRelease;
        movie.director = userDirector;

        movie.save(function(err, movie) {
            if (err) return console.log(err);
            if (method === 'PUT') {
                res.json(movie);
            }
             else {
                res.redirect('/movies/' + movie._id);

            };

        });

    });

}

function deletMovie(method, req, res) {
    movieId = req.params.id;
    //Retrieve the movie from mongodb- we gona require mongoose
    Movie.remove({
        _id: movieId
    }, function(err) {
        if (err) return console.log(err);


        if (method === 'GET') {
            res.redirect('/movies');
        } else {
            res.send('Movie was deleted');

        }
    });

}
module.exports = router;
