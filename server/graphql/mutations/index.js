var addUser = require('./add').add;
var removeUser = require('./remove').remove;
var updateUser = require('./update').update;
var addHackathon = require('./addHackathon').add;
module.exports = {
  addUser,
  removeUser,
  updateUser,
  addHackathon
}