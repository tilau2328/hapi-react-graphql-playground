const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} = require('graphql');

const {
  UserResolvers,
  RoomResolvers,
  FileResolvers,
  PostResolvers,
  VoteResolvers,
  CommentResolvers
} = require('./resolvers');

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
    admins: {
      type: new GraphQLList(UserType),
      resolve: RoomResolvers.getRoomAdmins
    },
    moderators: {
      type: new GraphQLList(UserType),
      resolve: RoomResolvers.getRoomModerators
    },
    members: {
      type: new GraphQLList(UserType),
      resolve: RoomResolvers.getRoomMembers
    },
    files: {
      type: new GraphQLList(FileType),
      resolve: RoomResolvers.getRoomFiles
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: RoomResolvers.getRoomPosts
    }
  })
});

const FileType = new GraphQLObjectType({
  name: 'File',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    description: { type: GraphQLString },
    author: {
      type: new GraphQLNonNull(UserType),
      resolve: FileResolvers.getFileAuthor
    },
    comments: {
      type: new GraphQLList(VoteType),
      resolve: FileResolvers.getFileComments
    },
    votes: {
      type: new GraphQLList(VoteType),
      resolve: FileResolvers.getFileVotes
    }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    author: {
      type: new GraphQLNonNull(UserType),
      resolve: PostResolvers.getPostAuthor
    },
    room: {
      type: RoomType,
      resolve: PostResolvers.getPostRoom
    },
    files: {
      type: new GraphQLList(FileType),
      resolve: PostResolvers.getPostFiles
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: PostResolvers.getPostComments
    },
    votes: {
      type: new GraphQLList(VoteType),
      resolve: PostResolvers.getPostVotes
    }
  })
});

const VoteType = new GraphQLObjectType({
  name: 'Vote',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    value: { type: GraphQLInt },
    author: {
      type: new GraphQLNonNull(UserType),
      resolve: VoteResolvers.getVoteAuthor
    }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
    author: {
      type: new GraphQLNonNull(UserType),
      resolve: CommentResolvers.getCommentAuthor
    },
    post: {
      type: new GraphQLList(PostType),
      resolve: CommentResolvers.getCommentPost
    },
    file: {
      type: new GraphQLList(FileType),
      resolve: CommentResolvers.getCommentFile
    },
    votes: {
      type: new GraphQLList(VoteType),
      resolve: CommentResolvers.getCommentVotes
    }
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
