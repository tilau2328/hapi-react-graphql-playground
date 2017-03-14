import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    //TODO: Call mutation
    this.setState({ username: '', password: '' });
  }

  handleUsernameChange(event){
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event){
    this.setState({ password: event.target.value });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control"
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </div>
        <button action="submit" className="btn btn-primary">SignIn</button>
      </form>
    );
  }
}

export default SignIn;
