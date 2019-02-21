const HTTP = require('http');

var server = HTTP.createServer(function(res,req){
  console.log("hello, how are you. I'm great");
}).listen(8080);
