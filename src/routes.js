import React from 'react';
import { Route, Swich } from 'react-router-dom';
import App from './components/App';
import Main from './components/Main';
import Header from './components/Header';
import CardsList from './components/CardsList';
import CardsListItem from './components/CardsListItem';
import CardsItem from './components/CardsItem';

export const routes = (
  <Route path='/' component={ App } >
    <Route component={ Header } />
    <Route component={ Main } >
      <Route path='/cards' component={ CardsList }>
      <Route path='/cards/:id' component={ CardsItem }/>
    </Route>
  </Route>
);
