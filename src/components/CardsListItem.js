import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Moment from 'react-moment';
import TextTruncate from 'react-truncate';
import like from '../img/like.svg';
import comment from '../img/comment.svg';
import bookmark from '../img/bookmark.svg';
import share from '../img/share-1.svg';

export default class CardsListItem extends Component {
  props = {
    card: this.props.card
  }
  render() {
    const { card } = this.props;
    return (
      <div>
        <ListItem>
          <CardUserInfo>
            <CardDate>
              <Moment format="DD.MM.YYYY">{ card.created_at }</Moment>
            </CardDate>
          </CardUserInfo>
          <CardInfo>
            <CardTitle>
              { card.title }
            </CardTitle>
            <LikePanel>
              <Like src={ like } />
              <Comment src={ comment } />
              <Bookmark src={ bookmark } />
              <Share src={ share } />
            </LikePanel>
            <CardIntro>
              <TextTruncate lines={ 3 }>{ card.body }</TextTruncate>
            </CardIntro>
            <ReadMore>
              <Link to={`/cards/${ card.id }`} style={{ textDecoration: 'none', color: '#0099ff' }}>Read more</Link>
            </ReadMore>
          </CardInfo>
        </ListItem>
      </div>
    );
  }
}

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
