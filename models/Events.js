const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  hostName: String,
  hostEmail: String,
  location: String,
  description: String,
  dateOfEvent: Date,
  dateSubmitted: Date
});

mongoose.model('events', eventSchema);
