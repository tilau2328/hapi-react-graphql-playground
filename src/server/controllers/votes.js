const Vote = require('../models/vote');

const listVotesById = function(vote_ids, callback){
  var vote_list = [];
  vote_ids.map(({id}) => {
    Vote.findById(id , (err, vote) => {
      if(err) { callback(err); }
      votes.push(vote);
      if(votes.length === vote_ids.length) { callback(null, votes); }
    });
  });
}

module.exports = {
  listVotesById
}
