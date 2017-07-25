import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Cards from './Cards';
import Home from './Home';

export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/cards' component={ Cards }/>
        </Switch>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;
