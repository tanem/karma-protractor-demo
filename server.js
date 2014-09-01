var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  var match;
  if ('/' === req.url) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Charset', 'utf8');
    fs.createReadStream(__dirname + '/index.html')
      .pipe(res);
  }
  else if (match = req.url.match(/^\/(?:src|test)\/.+\.js$/)) {
    res.setHeader('Content-Type', 'text/javascript');
    res.setHeader('Charset', 'utf8');
    fs.createReadStream(__dirname + match)
      .pipe(res);
  }
  else if (match = req.url.match(/^\/src\/.+\.css$/)) {
    res.setHeader('Content-Type', 'text/css');
    res.setHeader('Charset', 'utf8');
    fs.createReadStream(__dirname + match)
      .pipe(res);
  }
  else {
    res.statusCode = 404;
    res.end('File not found');
  }
}).listen(3000);

console.log('listening on :3000');