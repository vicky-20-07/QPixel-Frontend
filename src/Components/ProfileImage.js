import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ src, alt }) => {
    return (
        <ImageWrapper>
            <img src={src} alt={alt} />
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #1267cf;

    img {
        width: 100%;
        height: auto;
    }
`;

export default ProfileImage;
