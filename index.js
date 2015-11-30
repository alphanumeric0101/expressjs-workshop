var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/hello', function(req, res) {
  res.send('<html><head><title>Greetings!</title></head><body><h1>Hello World!</h1></body></html>');
});

app.get('/hello/:firstname', function(req, res) {
  res.send('<h1>Hello ' + req.params.firstname + '!</h1>');
  //console.log(req.params);
});



app.get('/op/:operation/:number1/:number2', function(req, res) {
  var firstNum = parseFloat(req.params.number1);
  var secNum = parseFloat(req.params.number2);

  if (req.params.operation === 'add') {
    var obj = {
      "operator": 'add',
      "firstOperand": firstNum,
      "secondOperand": secNum,
      "solution": (firstNum + secNum).toString()
    }
    res.send(obj);
  }
  else if (req.params.operation === 'subtract') {
    obj = {
      "operator": 'subtract',
      "firstOperand": firstNum,
      "secondOperand": secNum,
      "solution": (firstNum - secNum).toString()
    }
    res.send(obj);
  }
  else if (req.params.operation === 'multiply') {
    obj = {
      "operator": 'multiply',
      "firstOperand": firstNum,
      "secondOperand": secNum,
      "solution": (firstNum * secNum).toString()
    }
    res.send(obj);
  }
  else if (req.params.operation === 'divide') {
    obj = {
      "operator": 'divide',
      "firstOperand": firstNum,
      "secondOperand": secNum,
      "solution": (firstNum / secNum).toString()
    }
    res.send(obj);
  }
  else {
    res.status(415).send('Unsupported Operand. Please use: "add, subtract, multiply or divide" only');
  }
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
