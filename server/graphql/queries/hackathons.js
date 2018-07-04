
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/hackathons');
var userType = require('../types/hackathons').hackType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      hackathons: {
        type: new GraphQLList(userType),
        resolve: function () {
          const hackathons = UserModel.find().exec()
          if (!hackathons) {
            throw new Error('Error')
          }
          return hackathons
        }
      }
    }
  }
});

