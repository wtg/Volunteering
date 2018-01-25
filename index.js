const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;
require('./models/Events');

mongoose.connect(keys.mongoose.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.mongoose.cookieKey]
  })
);

require('./routes/volunteerEventsRoutes')(app);

console.log('we listen on', PORT);
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT);
