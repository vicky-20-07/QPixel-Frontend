import React from "react";
import styled from "styled-components";

export default function Pin(props) {

    let {urls} = props;
    return(
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="pin" />
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px;
`

const Container = styled.div`
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
`