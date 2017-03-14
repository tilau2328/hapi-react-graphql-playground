import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class Header extends Component {
  signUp(){
    if(!this.props.authenticated){
      return <Link className="btn btn-link" to="/signup" > SignUp </Link>;
    }
  }

  signIn(){
    if(!this.props.authenticated){
      return <Link className="btn btn-link" to="/signin" > SignIn </Link>;
    }
    return (
      <a className="btn btn-link" onClick={() => this.props.signOut()}>
        SignOut
      </a>
    );
  }

  requireAuth(link){ return this.props.authenticated ? link : null; }

  render(){
    return (
      <nav className="navbar navbar-light navbar-fixed-top">
        <ul className="nav navbar-nav">
          <li className="nav-item"> <Link to="/" className="btn-link">Home</Link> </li>
          { this.requireAuth(<li className="nav-item"> <Link to="/files" className="btn-link">Files</Link> </li>) }
        </ul>
        <ul className="nav navbar-nav pull-right">
          <li className="nav-item"> { this.signIn() } </li>
          <li className="nav-item"> { this.signUp() } </li>
        </ul>
      </nav>
    )
  }
};

function mapStateToProps(state){
  //return { authenticated: state.auth.isAuthenticated };
  return {};
}

export default connect(mapStateToProps, actions)(Header);
