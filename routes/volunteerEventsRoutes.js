const mongoose = require('mongoose');

const Event = mongoose.model('events');

module.exports = app => {
  app.get('/api/allEvents', (req, res) => {
    res.send('woo, events!');
  });
};
