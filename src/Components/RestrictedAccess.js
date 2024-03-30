import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RestrictedAccess() {
    const navigate = useNavigate();
    return (
        <>
            <Wrapper>
                <Container>
                    <h3>
                        Sorry, you do not have permission to access this page. This area of the website is restricted to authorized users only.

                        If you believe you should have access to this page, please contact the administrator or log in with appropriate credentials.

                        Thank you for your understanding.
                    </h3>
                    <Buttons>
                        <button onClick={() => navigate('/')}>BACK TO HOME</button>
                        <button onClick={() => navigate('/Login')}>LOGIN</button>
                    </Buttons>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    background: #100C08;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`

const Container = styled.div`
    color: white;
    background: #1C1C1C;
    width: 50%;
    padding: 30px;
    font-size: 20px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    button {
        font-weight: 700;
        font-size: 20px;
        width: 150px;
        height: 50px;
        border: none;
        background: #242424;
        color: white;
        box-shadow: 0 0 2px 0px #100C08;
    }
`