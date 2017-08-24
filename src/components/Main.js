import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Header/Header';
import Cards from './Cards';
import StartPage from './StartPage';
import PageSigninSignup from './PageSigninSignup';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path='/' component={ StartPage }/>
          <Route path='/cards' component={ Cards }/>
          <Route path='/users/signup' component={ PageSigninSignup }/>
          <Route path='/users/signin' component={ PageSigninSignup }/>
        </Switch>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 1296px;
  height: 1302px;
  background-color: #ffffff;
`;
