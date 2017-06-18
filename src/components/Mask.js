import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

export default class Mask extends React.Component {
    render() {
        return (
            <Section>
                <Slider />
            </Section>
        );
    }
}

const Section = styled.div`
  margin-left: 293px;
  margin-top: 134px;
  float: left;
  width: 390px;
  height: 500px;
  border-radius: 4px;
  background-color: #ffffff;
`;
