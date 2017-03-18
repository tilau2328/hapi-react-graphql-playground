const { editUser, deleteUser } = require('../../../controllers/users');

const EditUser = function(source, { id }){
  return new Promise((resolve, reject) => {
    editUser(id, (err, comment) => {
      err ? reject(err) : resolve(comment);
    });
  });
}

const DeleteUser = function(source, { id }){
  return new Promise((resolve, reject) => {
    deleteUser(id, (err, success) => {
      err ? reject(err) : resolve(success);
    });
  });
}

module.exports = {
  EditUser,
  DeleteUser
};
