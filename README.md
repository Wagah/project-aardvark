# Introduction to Node.js
What is node?
____________

It is an event driven non-blocking i/o (input/output)*server* that is asynchronous in nature.
It is written using javascript.
## How it works in a NUtshell
1. Node receives events
2. It stashes them in an even que
3. The evens are then pushed to a thread pool for processing
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
	+ It allows requests to be executed in no particular order where the previous operation does have gave to finish before the bext one can begin

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

			We use the require function to export modules defines in other files into our mani files

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
-A ttp ver/method that maps to a controller on the server.

GET/photo/19*


## Using REST in a web Application
1. Client sends a  request: 'GET /movie/198'
2.THe server's router maps that request and the verb to a cvontroller's action:
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