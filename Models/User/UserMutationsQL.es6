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
  setPrefMail: {
    type: UserType,
    args: {
      id:{
        name:'id',
        type: new GraphQLNonNull(GraphQLID)
      },
      prefMail: {
        name: 'prefMail',
        type: new GraphQLNonNull(GraphQLBoolean)
      }
    },
    resolve: User.updateUser
  }
};
