import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import CardsList from './CardsList';
import CardsItem from './CardsItem';

export default class Cards extends Component {
  render() {
    return (
      <CardContainer>
        <Switch>
          <Route exact path='/cards' component={ CardsList }/>
          <Route path='/cards/:id' component={ CardsItem } />
        </Switch>
      </CardContainer>
    );
  }
}


const CardContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;
