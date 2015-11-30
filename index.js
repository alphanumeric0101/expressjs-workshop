var express = require('express');
var app = express();
var bpar = require('body-parser');
app.use(bpar.json());

var entries = {
  
  
  // 1: {
  //   firstName: "John",
  //   lastName: "Smith",
  //   emails: [{
  //     type: "home",
  //     address: "john@smith.com"
  //   }, {
  //     type: "work",
  //     address: "jsmith@megacorp.com"
  //   }]
  // },
  // 2: {
  //   firstName: "Cindy",
  //   lastName: "Paramount",
  //   emails: [{
  //     type: "home",
  //     address: "cindy@home.com"
  //   }, {
  //     type: "work",
  //     address: "misspara@minishop.com"
  //   }]
  // },
  // 3: {
  //   firstName: "Daliah",
  //   lastName: "Carmela",
  //   emails: [{
  //     type: "work",
  //     address: "d.money@mammoth.com"
  //   }, {
  //     type: "other",
  //     address: "basement@loveshack.com"
  //   }]
  // },
  // ...
};

// app.get('/entry/search', function(req, res) {
//   var matches = [];
//   console.log(req.query);

//   for (var p in entries) {
//     if (
//       ((req.query.firstName !== undefined) && (entries[p].firstName.toLowerCase().indexOf((req.query.firstName).toLowerCase()) !== -1)) ||
//       ((req.query.lastName !== undefined) && (entries[p].lastName.toLowerCase().indexOf((req.query.lastName).toLowerCase()) !== -1))
//     ) {
//       matches.push(entries[p].firstName + ' ' + entries[p].lastName);
//     }
//     else if (req.query.emails) {
//       entries[p].emails.forEach(function(obj) {
//         if (obj.address.toLowerCase().indexOf((req.query.emails).toLowerCase()) !== -1) {
//           matches.push(entries[p].firstName + ' ' + entries[p].lastName);
//         }
//       });
//     }

//   }
//   if (matches.length > 0) {
//     res.send("The following entries contain a match: " + matches);
//   }
//   else {
//     res.send("Could not find any matches");
//   }
// });



//////////////////////////
// BEGIN THEPOST SECTION//
//////////////////////////

app.post('/entry', function(req, res) {
  console.log(req.body);
  var bodyId = 1;
  entries.id = bodyId;
  entries.content = req.body;
  res.send("You've created a new entry with ID: " + entries.id + ' ' + entries.content.firstName + ' ' + entries.content.lastName );
  bodyId++;
});















/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
