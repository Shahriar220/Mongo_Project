var http = require("http");

http.createServer(function (request,response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('<b>Hello and welcome');

}).listen(8081);

console.log('Server started at http://127.0.0.1:8081');