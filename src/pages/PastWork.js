import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import Card from '../components/Card';
import { RumbleDescription, SMALL_RUMBLE_DESCRIPTION } from '../constants/Texts';
import BasicText from '../components/BasicText';


const PastWork = () => (
    <CenteredContainer id={'PastWork'}>
        <BasicText text={`What I've been up to so far`} isTitle/>
        <Card 
        src='http://www.mnews.co.il/upload/1503476102.png'
        name='Rumble'
        title='Fullstack engineer'
        dates='01.03.2018 - present'
        text={SMALL_RUMBLE_DESCRIPTION}
        />
        <Card 
        src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/IDC_logo_White.svg/1200px-IDC_logo_White.svg.png'
        name='IDC'
        title='Computer science student'
        dates='01.11.2017 - 01.09.2019'
        text={`
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
        `}
        />
    </CenteredContainer>
);

export default PastWork;