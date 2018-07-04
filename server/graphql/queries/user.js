
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/user');
var userType = require('../types/user').userType;
var hackModel = require('../../models/hackathons');
var hackType = require('../types/hackathons').hackType;
// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      },
      hackathons: {
        type: new GraphQLList(hackType),
        resolve: function () {
          const hackathons = hackModel.find().exec()
          if (!hackathons) {
            throw new Error('Error')
          }
          return hackathons
        }
      }
    }
  }
});

