const { signIn, signUp } = require('./controllers/users');

const signInHandler = function(req, res){
  const data = req.payload;
  signIn(data.username, data.password, (err, token) => {
    if(err) return res({ error: err });
    res({ token: token });
  });
}

const signUpHandler = function(req, res){
  const data = JSON.parse(req.payload);
  signUp(data.username, data.email, data.password, (err, token) => {
    if(err) return res({ error: err });
    res({ token: token });
  });
}

const signInRoute = { method: 'POST', path: '/auth/signin', handler: signInHandler, config: { auth: false } }
const signUpRoute = { method: 'POST', path: '/auth/signup', handler: signUpHandler, config: { auth: false } }

const routes = [ signInRoute, signUpRoute ];
module.exports = routes;
