import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import RestrictedAccess from "./RestrictedAccess";

export default function Notification() {
    const display = window.localStorage.getItem('isloggedin');
    return (
        display ? (
            <Wrapper>
                <Header />
                <Container>
                    <h1>NO RECORDS FOUND</h1>
                </Container>
            </Wrapper>
        )
            :
            (
                <RestrictedAccess />
            )
    );
}

const Container = styled.div`
    background-color: #100C08;
    height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
    }
`

const Wrapper = styled.div`
`