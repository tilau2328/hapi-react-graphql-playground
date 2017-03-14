const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    username: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

const RoomType = new GraphQLObjectType({
  name: 'Room',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    admins: { type: new GraphQLList(UserType) },
    moderators: { type: new GraphQLList(UserType) },
    members: { type: new GraphQLList(UserType) },
    files: { type: new GraphQLList(FileType) },
    posts: { type: new GraphQLList(PostType) }
  })
});

const FileType = new GraphQLObjectType({
  name: 'File',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    description: { type: GraphQLString },
    author: { type: new GraphQLNonNull(UserType) },
    votes: { type: new GraphQLList(VoteType) }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    author: { type: new GraphQLNonNull(UserType) },
    room: { type: RoomType },
    files: { type: new GraphQLList(FileType) },
    comments: { type: new GraphQLList(CommentType) },
    votes: { type: new GraphQLList(VoteType) }
  })
});

const VoteType = new GraphQLObjectType({
  name: 'Vote',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    value: { type: GraphQLInt },
    author: { type: new GraphQLNonNull(UserType) }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    files: { type: new GraphQLList(FileType) },
    author: { type: new GraphQLNonNull(UserType) },
    votes: { type: new GraphQLList(VoteType) }
  })
});

module.exports = {
  UserType,
  RoomType,
  FileType,
  PostType,
  VoteType,
  CommentType
}
