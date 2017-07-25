import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { getCards } from '../actions/cards';
import Moment from 'react-moment';
import TextTruncate from 'react-truncate';
import like from '../img/like.svg';
import comment from '../img/comment.svg';
import bookmark from '../img/bookmark.svg';
import share from '../img/share-1.svg';
import CardsListItem from './CardsListItem';

export default class CardsList extends Component {
  state = {
    cards: null
  }

  componentDidMount() {
    getCards().then(cards => this.setState({ cards }));
  }

  render() {
    const { cards } = this.state;
    return (
      <List>
        {cards ? (
          cards.map(item => (
            <CardsListItem card={item} key={item.id}/>
          ))
        ) : (
          <div>Loading ...</div>
        )}
      </List>
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

const ListItem = styled.div`
  width: 780px;
  height: 42px;
  margin-bottom: 15px;
`;

const CardTitle = styled.div`
  width: 580px;
  height: 42px;
  margin-top: 15px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: transparent;
  margin-top: 0;
  color: #29404B;
  font-size: 30px;
`;

const CardDate = styled.div`
    margin-top: 26px;
    padding-left: 46px;
    box-sizing: border-box;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10px;
    color: #8A8C8E;
`;

const CardFooter = styled.div`
  width: 580px;
  height: 42px;
`;

const ReadMore = styled.div`
  width: 580px;
  height: 42px;
  margin-top: 15px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
`;

const CardIntro = styled.div`
  width: 540px;
  height: 69px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.64;
  text-align: justify;
  color: #29404b;
`;

const CardUserInfo = styled.div`
  width: 240px;
  height: 198px;
  float: left;
`;

const CardInfo = styled.div`
  width: 540px;
  height: 198px;
  margin-bottom: 16px;
  float: right;
`;

const LikePanel = styled.div`
  width: 580px;
  hight: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Like = styled.img`
  width: 20px;
  height: 18px;
  object-fit: contain;
`;

const Comment = styled.img`
  width: 21px;
  height: 18px;
  margin-left: 39px;
  background-color: #0099ff;
  background-color: var(--k);
`;

const  Bookmark = styled.img`
  width: 15px;
  height: 18px;
  margin-left: 32px;
  object-fit: contain;
`;

const Share = styled.img`
  width: 17px;
  height: 18px;
  margin-left: 20px;
  object-fit: contain;
`;
