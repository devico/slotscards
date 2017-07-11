import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import CardsList from './CardsList';
import CardsItem from './CardsItem';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContainer>
          <Route path="/cards" component={CardsList} />
          <Route path="/cards/:cardId" component={CardsItem} />
        </MainContainer>
      </div>
    );
  }
}

const MainContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;
