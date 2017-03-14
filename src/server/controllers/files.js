const File = require('../models/file');

const findFile = function(id, callback){
  File.findById(id, (err, file) => {
    err ? callback(err) : callback(null, file);
  });
}

const listFiles = function(callback){
  File.find({}, (err, files) => {
    err ? callback(err) : callback(null, files);
  });
}

const createFile = function(name, callback){
  const new_file = new File({ name });
  new_file.save((err, file) => {
    err ? callback(err) : callback(null, file);
  });
}

const editFile = function(id, callback){
  findFile(id, (err, file) => {
    if(err){ callback(err); }
    // TODO: edit user
    file.save((err, file) => {
      err ? callback(err) : callback(null, file);
    });
  });
}

const deleteFile = function(id, callback){
  File.findByIdAndRemove(id, (err, file) => {
    err ? callback(err) : callback(null, file);
  });
}

module.exports = {
  findFile,
  listFiles,
  createFile,
  editFile,
  deleteFile
};
module.exports = {

};
