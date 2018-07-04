

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// User Type
exports.hackType = new GraphQLObjectType({
  name: 'hackathons',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      eventName: {
        type: GraphQLString
      },
      eventId: {
        type: GraphQLString
      },
      summary: {
        type: GraphQLString
      },
      orgName: {
        type: GraphQLString
      },
      startDate: {
        type: GraphQLString
      },
      endDate: {
        type: GraphQLString
      },
      techStack :{
          type: GraphQLString
      }
    }
  }
});

