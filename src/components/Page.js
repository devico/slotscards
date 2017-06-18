import React from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import Side from './Side';

export default class Page extends React.Component {
    render() {
        return (
            <Background>
                <Mask />
                <Side />
            </Background>
        );
    }
}

const Background = styled.div`
width: 1366px;
height: 768px;
background-color: rgba(233, 240, 250, 0.75);
`;
