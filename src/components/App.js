import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Moment from 'react-moment';
import CardsItem from './CardsItem';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ Main } />
      </Router>
    );
  }
}
