var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hackSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  orgName: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  techStack: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('hackathon', hackSchema);
module.exports = Model;
