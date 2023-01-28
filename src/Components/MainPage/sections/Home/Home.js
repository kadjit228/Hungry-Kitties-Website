import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import TypeWriter from './TypeWriter';
import picture1 from './../../../../assets/logo.png'
import picture2 from './../../../../assets/ToolsAssets/nftText.png'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width:100vw;
position: relative;
background-color:${props => props.theme.body};
`
const Container = styled.div`
    width:90%;
    min-height: 60vh;
    margin: 0vw auto; //
    background-color: ${props=>props.theme.body};
    overflow: visible;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру

`

const Box = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
`
const Box1 = styled.div`
    width:50%;
    height:100%;
    margin-top: -20vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const rotate = keyframes`
    100%{
        transform: rotate(1turn);
    }
`

const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 7rem;
    height: 7rem;

    img{
        width: 100%;
        height: auto;
        animation: ${rotate} 6s linear infinite reverse;
    }
`

const VideoContainer = styled.div`
    width:100%;
    height: 100vh;

    img{
        width:100%;
        height:auto;
    }
`

function Home() {
    return (
        <Section>
            <Container>
                <Box1>
                    <TypeWriter/>
                </Box1>
                <Box>
                    <VideoContainer>
                        <img src = {picture2} alt = "picture"/>
                    </VideoContainer>
                </Box>
            </Container>
        </Section>
    );
}

export default Home;