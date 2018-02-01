const mongoose = require('mongoose');

const Event = mongoose.model('events');

module.exports = app => {
  const uniqueTerms = terms => {
    const unique = terms.filter(function(term, pos) {
      return terms.indexOf(term) == pos;
    });
    return unique;
  };

  const isString = value => {
    return typeof value === 'string' || value instanceof String;
  };

  const isInArray = (a, element) => {
    return a.indexOf(element) >= 0;
  };

  const isNotInArray = (a, element) => {
    return a.indexOf(element) == -1;
  };

  app.get('/api/get/all', async (req, res) => {
    const allEvents = await Event.find({});
    res.send(allEvents);
  });

  app.get('/api/get/all_active', async (req, res) => {
    const allEvents = await Event.find({ dateOfEvent: { $gt: new Date() } });
    res.send(allEvents);
  });

  app.get('/api/get/search', async (req, res) => {
    const searchTerms = isString(req.query.term)
      ? [req.query.term]
      : req.query.term;
    // console.log('TERMS', searchTerms);
    const allEvents = await Event.find({});
    var eventSearch = [];
    var validEvents = [];
    var flag = true;
    for (var i in allEvents) {
      var event = allEvents[i];
      flag = true;
      for (var j in searchTerms) {
        var searchTerm = searchTerms[j];
        if (searchTerm[0] == '-') {
          searchTerm = searchTerm.slice(1, searchTerm.size);
          if (isInArray(event.terms, searchTerm)) {
            flag = false;
            break;
          }
        } else {
          if (isNotInArray(event.terms, searchTerm)) {
            flag = false;
            break;
          }
        }
      }
      if (flag) validEvents.push(event);
      flag = true;
    }
    res.send(validEvents);
  });

  app.post('/api/post/event', async (req, res) => {
    const { title, hostName, hostEmail, location, description } = req.query;
    const dateOfEvent = new Date(req.query.dateOfEvent);
    const dateSubmitted = new Date();
    let terms = [].concat(
      title.split(' '),
      hostName.split(' '),
      location.split(' '),
      description.split(' '),
      dateOfEvent,
      dateSubmitted
    );
    terms = uniqueTerms(terms);

    const event = new Event({
      title,
      hostName,
      hostEmail,
      location,
      description,
      dateOfEvent,
      dateSubmitted,
      terms
    });
    const saved = await event.save();
    res.send('Made event!');
  });
};
