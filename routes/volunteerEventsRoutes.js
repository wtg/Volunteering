const mongoose = require('mongoose');

const Event = mongoose.model('events');

module.exports = app => {
  app.get('/api/get/all', (req, res) => {
    res.send('woo, events!');
  });

  app.get('/api/post/event', (req, res) => {
    res.send('Made event!');
  });
};
