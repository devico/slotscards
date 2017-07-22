import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
