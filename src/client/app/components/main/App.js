import React, { Component } from 'react';
import Header from './header';

const App = () = > (
  <div className="container">
    <Header />
    <div> {this.props.children} </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;
