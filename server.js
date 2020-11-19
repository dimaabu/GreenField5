const express = require('express');
const app = express();
const routers = require('./routes');
var cookieParser = require('cookie-parser')

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


app.use(express.static(__dirname + '/frontend/index.html'))


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/frontend/build'))
}

app.get('/', (req, res) => {

  res.json({ mess: "welcome welcome" })

})
app.use('/', routers)
module.exports = app;

