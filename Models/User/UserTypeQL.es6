import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';

import User from './UserSchema.es6';

export default new GraphQLObjectType({
  name: 'User',
  description: 'A user, player or GameMaster',
  fields: ()=> ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    login: {
      type: GraphQLString
    },
    usual: {
      type: new GraphQLList(GraphQLInt)
    },
    GM: {
      type: GraphQLBoolean
    },
    prefMail: {
      type: GraphQLBoolean
    },
    email: {
      type: GraphQLString
    }
  })
});
