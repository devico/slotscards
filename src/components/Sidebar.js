import React, { Component } from 'react';
import styled from 'styled-components';
import logonotext from '../img/logo-no-text.svg';
import feedactive from '../img/feed-active.svg';
import bookmarkspassive from '../img/bookmarks-passive.svg';
import recentpassive from '../img/recent-passive.svg';
import popularpassive from '../img/popular-passive.svg';
import settingspassive from '../img/settings-passive.svg';
import quitpassive from '../img/quit-passive.svg';

export default class Main extends Component {
  render() {
    return (
      <Section>
        <LogoNoText src={ logonotext } />
        <FeedActive src={ feedactive } />
        <BookmarksPassive src={ bookmarkspassive } />
        <RecentPassive src={ recentpassive } />
        <PopularPassive src={ popularpassive } />
        <SettingsPassive src={ settingspassive } />
        <QuitPassive src={ quitpassive } />
      </Section>
    );
  }
}

const Section = styled.div`
  width: 70px;
  height: 768px;
  background-color: #2f8bed;
`;

const  LogoNoText = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 22px;
  margin-left: 20px;
  margin-bottom: 18px;
  object-fit: contain;
`;

const  FeedActive = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const  BookmarksPassive = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;
const  RecentPassive = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const  PopularPassive = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const  SettingsPassive = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 250px;
  object-fit: contain;
`;

const  QuitPassive = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;
