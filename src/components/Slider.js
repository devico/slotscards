import React from 'react';
import styled from 'styled-components';
import markdown from '../img/mark-down.svg';
import '../App.css';

export default class Slider extends React.Component {
    render() {
        return (
            <div>
                <ImgSection>
                    <img src={markdown} className="App-markDown" alt="markdown" />
                </ImgSection>
                <IntroSection>Markdown markup language</IntroSection>
                <TextSection>
                    We satisfy the desire for fast code reading
                    so you can highlight crucial words by using markdown.
                </TextSection>
            </div>
        );
    }
}

const ImgSection = styled.div`
    padding-top: 67px;
    padding-left: 81px;
    margin-bottom: 48px;
`;

const IntroSection = styled.div`
    margin-left: 56px;
    width: 278px;
    height: 27px;
    font-family: arial, verdana, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: #29404b;
`;

const TextSection = styled.div`
    margin-left: 25px;
    margin-top: 10px;
    width: 340px;
    height: 40px;
    font-family: arial, verdana, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    text-align: center;
    color: #29404b;
`;
