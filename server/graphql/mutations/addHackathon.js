
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/hackathons.js');
var UserModel = require('../../models/hackathons.js');

exports.add = {
  type: UserType.hackType,
  args: {
    eventName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    eventId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    summary: {
      type: new GraphQLNonNull(GraphQLString)
    },
    orgName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLString)
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLString)
    },
    techStack :{
        type: new GraphQLNonNull(GraphQLString)
    }

  },
  resolve(root, params) {
    const uModel = new UserModel(params);
    const newHackathon = uModel.save();
    if (!newHackathon) {
      throw new Error('Error');
    }
    return newHackathon
  }
}