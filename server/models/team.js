var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  team_id: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
   event_id: {
    type: String,
    required: true
  },
  participants: {
    type: DOMStringList,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  badges: {
    type: String,
    required: true
  },
   rank: {
    type: Number,
    required: true
  },
  teamSize: {
    type: Number,
    required: true
  },
   teamOrg: {
    type: String,
    required: true
  },
  teamStatus: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('team', teamSchema);
module.exports = Model;
