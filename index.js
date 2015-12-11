//Express
var express = require('express');
var cons = require("consolidate"); //we require the consolidate here
var app = express();


// express middleware
var bodyParser = require('body-parser');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//EXpress setting
app.engine('html', cons.liquid);

app.set('views', './views');
app.set('view engine', 'html');

//Express middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
//the movie array which was initially here has been added in the databse using POSTMAN and then deleted.

//include routes
var routes = require('./routes/movies');
    app.use(routes);


            app.listen(8082, function() {
                console.log('Server running on 127.0.0.1:8082');
            });
            

