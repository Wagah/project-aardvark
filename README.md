2# Introduction to Node.js
What is node?
____________

It is an event driven non-blocking i/o (input/output)*server* that is asynchronous in nature.
It is written using javascript.
## How it works in a NUtshell
1. Node receives events
2. It stashes them in an event que
3. The events are then pushed to a thread pool for processing
4. Once the thread is done, it communicates it's results back to Node

##Concepts
-Event driven
	+Node libraries receive events and execute
----
//jquery
$("div").on('click', function(){
	

});
//
Node syntax
var http = require('http');
http.createServer(8081,function(request,response, next){
	

});
-------
-Asychronous
	+ Node uses a non-procedural style of computation
	+ It allows requests to be executed in no particular order where the previous operation does have gave to finish before the next one can begin

-Non-blocking
	+In procedural language, any heavy and time consuming operations would be ran in a separate thread from the main one. 
	+ Node provides us with the ability to write our code using an asynchronous an event driven style where callbacks are ran when events are received.
	+ This give us the ability to have multiple i/o operations within a single thread not have them 'block'(wait for the previous process to run before executing the main process).


-Thread
	+When a code is running on a compiler. 	The compilerr creates a main process within which it will excute your code. This process is known as the thread

###Common Syntaxt used in Node
1. Running a file using node
	//in the folder where the js file is defined run <filename>

2. Importing parkages and files into your main file. 
---
			// This imports a natively defined nodejs package
			require('http');
			
			// This imports a nodejs package defined in the node_modules folder within your apps directory
			require('./express');

			//This imports a module from a folder within your app
			require('./models/Movie.js');

			We use the require function to export modules defines in other files into our main files

-------


3. Starting a node project
	//run this in the terminal within your app directory npm init
	-----
4. Adding a module to your project using npm
	//run this in the terminal within your app directory npm install ---save<module_name>

#RESTFUL Routes
## What is REST
-It is an acronym that stand for Representational State Transfer

## Why REST?
-REST provide a standard method for resource manipulation on the server.

##Components of REST
-A url that represents the resource
-A http server/method that maps to a controller on the server.

GET/photo/19*


## Using REST in a web Application
1. Client sends a  request: 'GET /movie/198'
2.THe server's router maps that request and the verb to a controller's action:
--------
The request /movie/198 would be mapped to a controller called movie which would have an a action called  show a handle that request.
3.The show action will communicate with the Movie Model and the query it for a movie with the id 198


## Common patterns of RESTFUL verbs and actions
Assuming you have a resource called photo. The REST
Method => GET

###CORS
-This is an acronym for Cross-Origin Sharing.
-It refers to the ability of one domain to use/ask for resources from another domain
			Example
			THe html with this image tag is being served from http://domain-a.com <img src="http://domain-b.com/mouse.jpg">
		-It is requesting an image from http://domain-b.com which is a different domain from where it's being hosted
		- This works when a html page does it, but DOES NOT work when using scripts to perform request. If a script on that page were to ask for the same image using the XMLHttpRequest object(using Ajax), the browser would throw a CORS error.
		- The only way that a script can access a different resource from another domain is if the server on that domain allows it to.
		This is done by adding that domain to the request Header known as Access-Control-Allow-Origin
		----------
		Access-Control-Allow-Origin:<allow domain> or <to allowany domain>
		--------------
12 Nov, 2015

NoSQL Databases
- These are databases that define ways of accessing and storing data in ways of other than using relations
-
##why NSql?
-NoSql was developed as a response to the rising of:
	+on-demand
	+scalable
	+easily replicable
	+minimal configuration

databases that were required to respond to the needs of modern applications.


##Types of NoSql
+Document database
+Graph stores-hypergraphDB
+Key-value
+wide-column store


##Looking for help
1. Documentation
2. Forums
3. Tutorials
4. Search engine eg Google, Bing, DuckDuckGo



Checkout[this link](http://nosql-database.org) for list of

For further reading on MongoDB , NoSql

ANGULAR
Webservices

Read: Angular
	  Restful
	  Nodejs
	  json-format of displaying data
	  API
	  Node- use nonblocking function

	 

#### pp.controller('blogsController',function($scope,$http){

var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
$http.get(url).success(function(response))- call up
- How to make a request using http protocol-REST
-------------------------------------------------------------------
MongoDB is the database, where you would store your data.

NodeJS is your server

ExpressJS is the HttpServer, which means it is still on the server side

Can you develop a MEAN app without AngularJS? Sure. You would have to rely on server side templating and rendering (Using something like Jade, or handlebars).

AngularJS allows you to create a client side, AJAX application. This allows you to create a snappy, responsive client side application, while without AngularJS (using only Node + Express), you would more likely do it with full server round trips. (though it is feasible and ridiculously annoying to create a SPA using Node + Express only).

Node.js: What's the advantages of using MongoDB/Mongoose?
I find that many people choose  mongoose, not use node-mongodb-native directly? I don't think ODM (Object Document Mapping) is the main reason about it.

Well aside of the obvious reason Mongoose being an ODM, here are some other things that might turn it into a  good candidate:

Built-in functions: MongoDB:

Source: Mongoose Middleware v4.0.7
Custom database functions (queries) per each document (mongo instance).

Here is a very simple way to understand why Mongoose is used if you're coming from a Sql background. The idea that Object-relational mapping (ORM)s are helping developers and applications run queries in an easier manner have moved things forward a bit faster, though sometimes folks still need to go back to pure Sql queries due to limitation.
Same thing with Mongoose, it's a higher layer on top of MongoDB that offers more functionality (one of them is being an ODM). Some folks rather stick with a raw driver and not choose the functions offered through and ODM like Mongoose.

If you go over to the  Mongoose Plugins docs, one realizes that things like managing connections, re-using the schema with Mongoose makes the tool more welcoming.

Maybe a tl;dr would be that mongoose is more than an ODM indeed, it adds in some necessary data manipulation functions and it works as a layer to be used for future additions (plugins) , rather than messing with the source of MongoDB itself.
Mongoose makes for a much more productive work with Node/Mongo, that's one of the bigger reasons.

Mongoose provides a validation and modeling layer to the app. It also adds some helpers to the native Mongo driver.

git IGNORE
-Use no ignore rather than be in version control: configurations, password

mongodb - open source doc. database that provide high performance, high availability and automatic scaling.


INSTALLING YEOMAN
-npm install -g yo bower grunt-cli gulp
-It has been installed in the project-"introduction to bootstrap" file