const { listPosts, findPost } = require('../../../controllers/posts');

const GetPosts = function(){
  return new Promise((resolve, reject) => {
    listPosts((err, posts) => {
      err ? reject(err) : resolve(posts);
    });
  });
}

const GetPost = function(source, { id }){
  return new Promise((resolve, reject) => {
    findPost(id, (err, post) => {
      err ? reject(err) : resolve(post);
    });
  });
}

module.exports = {
  GetPosts,
  GetPost
}
