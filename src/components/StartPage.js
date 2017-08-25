import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Cards from './Cards';
import firstpage from '../img/first-page.svg';

export default class StartPage extends Component {
  render() {
    return (
      <Container>
        <FirstPage src={ firstpage } />
        <Slogan>
          Keep and share your discoveries
        </Slogan>
        <Describe>
          How To Cards can keep all your coding solutions in one place. Explore new experience from programmers community all over the world.
        </Describe>
        <Cards />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 1296px;
  height: 1302px;
  background-color: #ffffff;
`;

const FirstPage = styled.img`
  width: 149.8px;
  height: 150.1px;
  margin-top: 30px;
  margin-left: 608px;
  object-fit: contain;
`;

const Slogan = styled.div`
  width: 633px;
  height: 36px;
  margin-left: 367px;
  margin-top: 30px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 0.9;
  text-align: center;
  color: #29404b;
`;

const Describe = styled.div`
width: 780px;
height: 68px;
margin-left: 293px;
margin-top: 34px;
font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 24px;
font-weight: 300;
text-align: center;
color: #29404b;
`;
