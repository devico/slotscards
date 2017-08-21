import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNoSigned from './HeaderNoSigned';
import HeaderSigned from './HeaderSigned';

export default class Header extends Component {
  render() {
    return (
      <HeaderBar>
        <HeaderNoSigned />
      </HeaderBar>
    );
  }
}

const HeaderBar = styled.div`
width: 1296px;
height: 70px;
background-color: #ffffff;
box-shadow: 0 -8px 17px 0 rgba(0, 0, 0, 0.5);
`;
