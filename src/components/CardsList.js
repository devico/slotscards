import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CardsListItem from './CardsListItem';
import CardsItem from './CardsItem';

export default class CardsList extends Component {
  state = {
    cards: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/cards.json')
      .then(response => response.json())
      .then(cards => {
        this.setState({ cards });
      });
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <List>
          {cards ? (
            cards.map(item => (
              <div>{ this.props.children }</div>
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </List>
        { this.props.children }
      </div>
    );
  }
}

const List = styled.div`
  width: 620px;
  height: 247px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
`;
