import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [userImages, setUserImages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');

                // Fetch user profile
                const profileResponse = await axios.get('http://localhost:5000/getUserProfile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(profileResponse.data);

                // Fetch user images
                const imagesResponse = await axios.get('http://localhost:5000/getUserImages', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserImages(imagesResponse.data.images || []);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUser(null);
                setUserImages([]);
            }
        };

        fetchUserData();
    }, []);

    const handleEditProfile = () => {
        navigate('/editProfile');
    };

    const defaultProfileImage = '/default-profile.png';

    const profileImageUrl = user && user.profile
        ? `data:${user.profileMimeType};base64,${user.profile}`
        : defaultProfileImage;

    return (
        <ProfileContainer>
            <Header />
            {user ? (
                <>
                    <ProfileHeader>
                        <ProfileImage
                            src={profileImageUrl}
                            alt="Profile"
                            onError={(e) => { e.target.src = defaultProfileImage; }}
                        />
                        <h2>{user.firstName} {user.lastName}</h2>
                        <h2>{user.email}</h2>
                        <EditButton onClick={handleEditProfile}>Edit Profile</EditButton>
                    </ProfileHeader>
                    {userImages.length > 0 ? (
                        <ImagesContainer>
                            {userImages.map((image, index) => (
                                <UserImage
                                    key={index}
                                    src={`data:${image.image.mimeType};base64,${image.image.data}`}
                                    alt={`User uploaded ${index}`}
                                />
                            ))}
                        </ImagesContainer>
                    ) : (
                        <NoImagesText>No images uploaded yet.</NoImagesText>
                    )}
                </>
            ) : (
                <LoadingText>Loading...</LoadingText>
            )}
        </ProfileContainer>
    );
};

export default Profile;

const ProfileContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background: #100C08;
    color: white;
    width: 100%;
`;

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const EditButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
`;

const UserImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

const NoImagesText = styled.p`
    font-size: 16px;
    color: #666;
`;

const LoadingText = styled.p`
    font-size: 16px;
    color: #666;
`;
