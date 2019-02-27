const HTTP = require('http');
const p = 8080;
var server = HTTP.createServer(function(res,req){
  console.log("Server listening on "+p);
}).listen(p);
