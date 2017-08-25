import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class HeaderSigned extends Component {
  render() {
    return (
      <div>
        <TitleCards>
          <Link to='#' style={{ textDecoration: 'none', color: '#29404b' }}>back to Feed</Link>
        </TitleCards>
        <SignInOrSignUp>
          <Link to='#' style={{
            textDecoration: 'none',
            color: '#0099ff'
          }}>Sign in or Sign up
          </Link>
        </SignInOrSignUp>
      </div>
    );
  }
}

const TitleCards = styled.div`
  float: left;
  margin-left: 65px;
  margin-top: 17px;
  width: 171px;
  height: 36px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.29;
  text-align: left;
`;

const SignInOrSignUp = styled.div`
  float: right;
  margin-right: 30px;
  padding-top: 26px;
  width: 117px;
  height: 19px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: justify;
  color: #0099ff;
  color: var(--k);
`;
