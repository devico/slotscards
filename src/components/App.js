import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

export default class App extends Component {
  render() {
    return (
      <MainContainer>
        <Side>
          <Sidebar />
        </Side>
        <Content>
          <Main />
        </Content>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 1366px;
  height: 1302px;
  background-color: #ffffff;
`;

const Side = styled.div`
  float: left;
`;

const Content = styled.div`
  float: right;
`;
