import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../Button';
import Card from './Card';
import Shape from './Shape';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Section = styled.section`
    min-height: 90vh;
    width:100%;
    color: ${props => props.theme.body};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 64em) {
        background-color: white;
    }
`

const Container = styled.div`
    width:90vw;
    margin: 1vh auto;
    //background-color: white;
    display: flex; // гибкий контейнер
    justify-content: space-around; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    border-radius: 40px;
    flex-wrap: wrap;
    @media (max-width: 64em) {
        margin-top: -2vh;
        background-color: white;
    }
    .swiper-button-next{
        color:black;
        @media (max-width: 64em) {
            display: none;
        }
    }

    .swiper-button-prev{
        color:black;
        @media (max-width: 64em) {
            display: none;
        }
    }

`
const RowContainer = styled.div`
    width:90vw;
    margin: 1vh auto;
    display: flex; // гибкий контейнер
    justify-content: center; //выравнивание по центру
    align-items: center; // выравнивание по вертикали по центру
    gap:15vw;
    border-radius: 40px;
    flex-wrap: wrap;
    @media (max-width: 64em) {
        flex-direction: column;
        justify-content: center;
        gap: 10vh;
        margin-top: 10vh;
        background-color: white;
    }

`

const MainTitle = styled.h1`
    font-size: ${props => props.theme.fontxxl};
    text-transform: capitalize;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${props => props.theme.black};
    width: fit-content;
    @media (max-width: 64em) {
        font-size: 5vw;
        color:#272727;
        border-bottom: 5px solid ${props => props.theme.black};
    }

`


function Team() {
    return (
        <Section id = "team">
            <MainTitle>
                Team
            </MainTitle>
            <Container>
                    <RowContainer>
                        <Card link= "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/balu.webp" name="Balu" position="Developer" />
                        <Card  link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/ikka.webp" name = "Ikki" position = "Boss and Artist"/>
                        <Card  link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/denchik.webp" name = "Tyupa" position = "Developer"/>
                    </RowContainer>
                    <RowContainer>
                        <Card link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/tim.webp" name = "Tim" position="Community Manager"/>
                        <Card link = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/yosya.webp" name = "Yosya" position="Designer"/>
                        <Shape title={"Only Cats"} text = {"In fact, it is cats who manage this project, people just feed us"}/>
                    </RowContainer>
            </Container>
        </Section>
    );
}

export default Team;