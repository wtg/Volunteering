const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  hostName: String,
  hostEmail: String,
  location: String,
  description: String,
  dateOfEvent: Date,
  dateSubmitted: Date,
  approved: { type: Boolean, default: false },
  terms: [String]
});

mongoose.model('events', eventSchema);
