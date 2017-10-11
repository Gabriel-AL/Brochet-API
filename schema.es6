
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

import mongoose from 'mongoose';
import User from './Models/User/UserSchema.es6';

import {
  UserQueries,
  UserMutations,
  UserType
} from './Models/User/UserQL.es6';

let RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: ()=>({
    user: UserQueries.user,
    users: UserQueries.users,
    userlog: UserQueries.userlog
  })
});

let RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: ()=>({
    setPrefMail: UserMutations.setPrefMail
  })
});

let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
export default schema;
