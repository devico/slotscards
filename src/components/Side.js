import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './RegistrationForm';

export default class Side extends React.Component {
    render() {
        return (
            <Box>
                <RegistrationForm />
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
