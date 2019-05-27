import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';
import { SUB_TEXT_FONT_SIZE } from '../constants/Sizes';

const Card = ({ src, name, title, dates, text }) => (
    <Container>
        <SquaredImage src={src} />
        <TextContainer>
            <BasicText text={name} />
            <BasicText text={title} />
            <BasicText text={dates} fontSize={SUB_TEXT_FONT_SIZE} />
            <BasicText text={text} isP  />
        </TextContainer>
    </Container>
);

const P = styled.p``;

const SquaredImage = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 3vh;
`;

const TextContainer = styled.div`
    margin-left: 3vw;
    background-color: red;
    @media screen and (max-width: 400px){
        margin-top: 2vh;
        margin-left: 0vw;
    }  
`;

const Container = styled(CenteredContainer)`
        flex-direction: row;
        justify-content: center; 
        align-items: center;
        width: 100%;
        max-width: 1000px;
        margin-top: 6vh;
        @media screen and (max-width: 700px){
            flex-direction: column;
        }

        background-color: blue;
`;
export default Card;
