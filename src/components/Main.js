import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class Main extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/cards.json')
      .then(res => {
        const cards = res.data.data.children.map(obj => obj.data);
        this.setState({ cards });
      });
  }

  render() {
    return (
      <MainContainer>
        <ul>
          {this.state.cards.map(card =>
            <li key={card.id}>{card.title}</li>
          )}
        </ul>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;
