import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <HeaderBar>
        <TitleCards>
          Cards
        </TitleCards>
        <SignInOrSignUp>
          <a href="#">SignIn or SignUp</a>
        </SignInOrSignUp>
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

const TitleCards = styled.div`
  float: left;
  margin-left: 100px;
  padding-top: 17px;
  width: 242px;
  height: 36px;
  font-family: arial, verdana, sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  text-align: left;
  color: #29404b;
`;

const SignInOrSignUp = styled.div`
  float: right;
  margin-right: 30px;
  padding-top: 26px;
  width: 117px;
  height: 19px;
  font-family: arial, verdana, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: justify;
  color: #0099ff;
  color: var(--k);
`;
