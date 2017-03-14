import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    //TODO: Call mutation
    this.setState({
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  }

  handleUsernameChange(event){
    this.setState({ username: event.target.value });
  }

  handleEmailChange(event){
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event){
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmationChange(event){
    this.setState({ password_confirmation: event.target.value });
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
            type="text"
            name="email"
            placeholder="Email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
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
        <div className="form-group">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            className="form-control"
            value={this.state.password_confirmation}
            onChange={this.handlePasswordConfirmationChange.bind(this)}
          />
        </div>
        <button action="submit" className="btn btn-primary">SignUp</button>
      </form>
    );
  }
}

export default SignUp;
