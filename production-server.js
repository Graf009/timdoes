var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('./dist');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      file.serve(request, response, function (err, res) {
          if (err && (err.status === 404)) { // If the file wasn't found
            response.writeHead(302, {
              'Location': '/404'
            });
            response.end();
          }
      });
    }).resume();
}).listen(80);
