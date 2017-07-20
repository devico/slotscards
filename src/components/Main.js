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
        {this.props.children}
      </div>
    );
  }
}

const MainContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;
