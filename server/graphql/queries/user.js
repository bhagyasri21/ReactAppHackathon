
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/user');
var userType = require('../types/user').userType;
var hackModel = require('../../models/hackathons');
var hackType = require('../types/hackathons').hackType;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
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
      users1: {
        type: new GraphQLList(userType),
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve: function (root, params, options) {
          console.log(params.id);
         
          const users = UserModel.findById(params.id).exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      }
      ,
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

