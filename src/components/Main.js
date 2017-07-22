import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import CardsList from './CardsList';
import CardsItem from './CardsList';

const Home = () => (
  <div>
    <h1>Welcome!</h1>
  </div>
);

export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/cards' component={ CardsList }/>
          <Route path='/cards/:id' component={CardsItem} />
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
