import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
