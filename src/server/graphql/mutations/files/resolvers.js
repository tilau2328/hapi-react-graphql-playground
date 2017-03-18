const { createFile, editFile, deleteFile } = require('../../../controllers/files');

const CreateFile = function(source, args){
  return new Promise((resolve, reject) => {
    createFile(args, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const EditFile = function(source, { id, title }){
  return new Promise((resolve, reject) => {
    editFile(id, { title }, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const DeleteFile = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteFile(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  CreateFile,
  EditFile,
  DeleteFile
};
