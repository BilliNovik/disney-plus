import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers/viewers-disney.png' alt='' />
                <video autoPlay loop playsInline muted>
                    <source src='/videos/1564674844-disney.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers/viewers-marvel.png' alt='' />
                <video autoPlay loop playsInline muted>
                    <source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers/viewers-national.png' alt='' />
                <video autoPlay loop playsInline muted>
                    <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers/viewers-pixar.png' alt='' />
                <video autoPlay loop playsInline muted>
                    <source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers/viewers-starwars.png' alt='' />
                <video autoPlay loop playsInline muted>
                    <source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    border-radius: 8px;
    padding-top: 55.75%;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img{
        display: block;
        border-radius: 5px;
        width:100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        opacity: 1;
        top:0;
        transition: opacity 500ms;
        z-index: 1;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);

        video{ 
            opacity: 1;
        }
    }
        
`

export default Viewers