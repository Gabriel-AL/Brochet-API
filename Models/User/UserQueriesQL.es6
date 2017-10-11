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

import UserType from './UserTypeQL.es6';
import User from './UserSchema.es6';

export default {
  users: {
    type: new GraphQLList(UserType),
    resolve: User.getListOfUsers
  },
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: User.getUserByID
  },
  userlog: {
    type: UserType,
    args: {
      login: {
        type: GraphQLString
      }
    },
    resolve: User.getUserByLogin
  }
};
