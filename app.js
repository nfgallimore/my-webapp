var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '/Users/nickgallimore/apiKey-71ZUBBUPE81U1T9Y4N5BR2S37.properties',
  application: 'https://api.stormpath.com/v1/applications/6OkhXWKNSv0fWYEDipIsnk',
  secretKey: 'some_long_random_string',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);