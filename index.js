var express = require('express');
var app = express();

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [{
      type: "home",
      address: "john@smith.com"
    }, {
      type: "work",
      address: "jsmith@megacorp.com"
    }]
  },
  // ...
};

app.get('/entries/:entryId', function(req, res) {
  if (entries[Number(req.params.entryId)] === undefined) {
    res.sendStatus(404);
  }
  else {
    res.send(entries[Number(req.params.entryId)]);
  }
});



/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
