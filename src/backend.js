var express = require('express');
var app = express();

app.get('/api/v0/news', function (req, res) {

  var data = {
    "news": [
      {"headline": "This is a news headline", "body": "..."},
      {"headline": "This is another news headline", "body": "Nice"}
    ]
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.use('/', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

