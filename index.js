//Express
var express = require('express');
var path = require('path');
var cons = require("consolidate"); //we require the consolidate here
var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", " ");
//   res.header("Access-Control-Allow-Origin-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


//passport
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

// express middleware
var bodyParser = require('body-parser');


//include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-aardvark');


//Express setting
app.engine('html', cons.liquid);

app.set('views', path.join(__dirname, 'views'));

// app.set('views', './views');
app.set('view engine', 'html');

//Express middleware-perform authentication
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUnintialized: false

}));
app.use(passport.initialize());
app.use(passport.session());
//the movie array which was initially here has been added in the databse using POSTMAN and then deleted.

//include routes

var moviesRoutes = require('./routes/movies');
var usersRoutes = require('./routes/users');
var indexRoute = require('./routes/index')
app.use(moviesRoutes);
app.use(usersRoutes);
app.use(indexRoute);

//passport config
var User = require('./models/user');
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());

app.listen(8082, function() {
    console.log('Server running on 127.0.0.1:8082');
});
