import React, { useEffect, useState } from "react";
import Pin from "./Pin";
import styled from "styled-components";
import './MainBoard.css';
import axios from "axios";

export default function MainBoard(props) {
    const { pins } = props;
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getImages')
            .then(res => setImages(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Wrapper>
            <Container className="mainboard_container">
                {pins.map((pin, index) => {
                    let { urls } = pin;
                    return <Pin key={index} urls={urls} />;
                })}
                {images.map((image, index) => (
                    <ImageWrapper>
                        <ImageContainer>
                            <img key={`image-${index}`} src={`data:${image.image.mimeType};base64,${image.image.data}`} alt={image.title} />
                        </ImageContainer>
                    </ImageWrapper>
                ))}
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    left: 0;
    background-color: #100C08;
    margin-top: 15px;
    justify-content: center;
`;

const Container = styled.div`
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
`;

const ImageWrapper = styled.div`
    padding: 8px;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        display: flex;
        width: 100%;
        border-radius: 5px;
        object-fit: cover;
    }
`;
