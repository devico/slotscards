import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

export default class Side extends Component {
  render() {
    return (
      <Box>
        <Switch>
          <Route path='/users/signin' component={ LoginForm }/>
          <Route path='/users/signup' component={ RegistrationForm }/>
        </Switch>
      </Box>
    );
  }
}

const Box = styled.div`
  float: right;
  margin-top: 134px;
  margin-right: 293px;
  width: 390px;
  height: 500px;
  border-radius: 4px;
  background-color: #29404b;
`;
