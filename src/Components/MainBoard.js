import React from "react";
import Pin from "./Pin";
import styled from "styled-components";
import './MainBoard.css'

export default function MainBoard(props) {

    let {pins} = props;

    return(
        <Wrapper>
            <Container className="mainboard_container">
                {pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls = {urls} />
                })}
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
`

const Container = styled.div`
    column-gap: 10px;
    margin: 0 auto;
    height: 100%;
`