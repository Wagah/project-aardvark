var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res){
	res.render('index', {'user': req.user})
});

module.exports = router;


//commit mssg add ogin, logout and signup views and routes
//provide validation for the user and email firlds in the user schema
//refactor the navbar to include the logout link