import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Main from './components/Main';
import Header from './components/Header';
import CardsList from './components/CardsList';
import CardsListItem from './components/CardsListItem';
import CardsItem from './components/CardsItem';

export const routes = (
  <Route path='/' component={ App } >
    <Route component={ Main } >
      <Route component={ Header } />
      <Route path='/cards' component={ CardsList }>
        <Route component={ CardsListItem } />
        <Route path='/cards/:cardId' component={ CardsItem }/>
      </Route>
    </Route>
  </Route>
);
