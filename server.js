var http = require('http');
var test = require('./test');
var url = require('url');
var count = 0;
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	response.write("<hr><button>123</button>");
	response.end('Hello World\n');
	//var d = new Date();
	console.log();
	console.log(test.test() + url.parse(request.url).href);
	count = count + 1;
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
//console.log('Server running at http://127.0.0.1:8888/');
